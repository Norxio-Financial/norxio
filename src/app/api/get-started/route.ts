import { NextResponse } from 'next/server';
import { z } from "zod";

const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email").refine(email => {
        const forbidden = [
            'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
            'aol.com', 'icloud.com', 'protonmail.com', 'zoho.com', 'yandex.com'
        ];
        const domain = email.split('@')[1]?.toLowerCase();
        return domain && !forbidden.includes(domain);
    }, "Please use a work email address"),
    businessName: z.string().min(1, "Business name is required"),
    country: z.string().min(1, "Country is required"),
    monthlyPayment: z.string().min(1, "Please select an estimated payment"),
    useCase: z.union([z.string(), z.array(z.string())]),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate data
        const result = formSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { success: false, errors: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const data = result.data;

        // Split name logic
        // "John Doe" -> First: John, Last: Doe
        const nameParts = data.fullName.trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        // Handle useCase array or string
        const useCaseStr = Array.isArray(data.useCase) ? data.useCase.join(", ") : data.useCase;

        // Map to SheetDB columns
        const sheetData = {
            "Name of Business ": data.businessName,
            "First Name": firstName,
            "Last Name": lastName,
            "Email Address  ": data.email,
            "Country of Incorporation": data.country,
            "Estimated monthly cross-border payment": data.monthlyPayment,
            "Primary use case": useCaseStr
        };

        if (!process.env.SHEETDB_API) {
            console.error("SHEETDB_API not defined");
            return NextResponse.json(
                { success: false, message: "Server configuration error" },
                { status: 500 }
            );
        }

        // Construct URL with Sheet1 param
        let apiUrlStr = process.env.SHEETDB_API;
        try {
            const apiUrl = new URL(apiUrlStr);
            if (!apiUrl.searchParams.has("sheet")) {
                apiUrl.searchParams.set("sheet", "Sheet1");
            }
            apiUrlStr = apiUrl.toString();
        } catch {
            // Fallback for simple concatenation if URL parsing fails
            if (!apiUrlStr.includes("?")) {
                apiUrlStr += "?sheet=Sheet1";
            } else if (!apiUrlStr.includes("sheet=")) {
                apiUrlStr += "&sheet=Sheet1";
            }
        }

        // Send as array of objects
        const payload = [sheetData];

        const response = await fetch(apiUrlStr, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const text = await response.text();
            console.error("SheetDB Error Status:", response.status);
            console.error("SheetDB Error Text:", text);
            console.error("Payload sent:", JSON.stringify(payload));
            return NextResponse.json(
                { success: false, message: "Failed to submit to external storage. " + text },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}

"use client";

import { useState } from "react";
import { useForm, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

import { countries } from "@/lib/countries";

const forbiddenDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com'];

const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address").superRefine((email, ctx) => {
        try {
            const domain = email.split('@')[1];
            if (domain && forbiddenDomains.includes(domain.toLowerCase())) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Please use a work email address",
                });
            }
        } catch {
            // ignore
        }
    }),
    businessName: z.string().min(1, "Business name is required"),
    country: z.string().min(1, "Country is required"),
    monthlyPayment: z.string().min(1, "Please select an option"),
    useCase: z.array(z.string()).refine((value) => value.length > 0, {
        message: "You have to select at least one item.",
    }),
});

interface FormInputFieldProps {
    control: Control<z.infer<typeof formSchema>>;
    name: keyof z.infer<typeof formSchema>;
    label: string;
    placeholder: string;
}

const FormInputField = ({ control, name, label, placeholder }: FormInputFieldProps) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="text-gray-700 font-medium">{label}</FormLabel>
                <FormControl>
                    <Input
                        placeholder={placeholder}
                        {...field}
                        value={typeof field.value === 'string' ? field.value : ''}
                        className="h-12 bg-white border-gray-200 rounded-lg text-base focus-visible:ring-blue-600"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default function GetStartedPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openCountry, setOpenCountry] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            businessName: "",
            country: "",
            monthlyPayment: "",
            useCase: [],
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/get-started', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSubmitted(true);
            } else {
                if (result.errors) {
                    Object.entries(result.errors).forEach(([key, value]) => {
                        form.setError(key as keyof z.infer<typeof formSchema>, { message: (value as string[])[0] });
                    });
                } else {
                    console.error(result.message || "Submission failed");
                }
            }
        } catch (error) {
            console.error("Submission error", error);
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-[#F5F9FA] px-4 font-sans">
                <div className="w-full max-w-md bg-transparent flex flex-col items-center text-center space-y-8">
                    {/* Success Icon */}
                    <div className="relative">
                        <div className="w-24 h-24 bg-blue-100/50 rounded-full flex items-center justify-center relative">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-blue-200 shadow-lg">
                                <Check className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>
                            <div className="absolute top-2 right-2 w-2 h-2 border border-blue-400 rounded-sm" />
                            <div className="absolute bottom-2 left-2 w-2 h-2 border border-blue-400 rounded-full" />
                            <div className="absolute top-0 left-0 w-full h-full border border-blue-200 rounded-full animate-pulse opacity-50" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-[#0B2545] tracking-tight">
                            Your request has been received
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our team will contact you within 1 business day.
                        </p>
                    </div>

                    <Button asChild className="h-12 bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-lg font-medium text-base shadow-lg hover:shadow-xl transition-all">
                        <Link href="/">
                            Go back home
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen w-full font-sans mt-16">
            {/* Left Panel */}
            <div className="hidden lg:flex w-[32%] bg-[#052c54] text-white flex-col relative overflow-hidden shrink-0">
                <div className="p-12 mt-20 z-10 relative">
                    <h1 className="text-4xl font-bold leading-tight mb-4 tracking-wide">
                        Set Up Your Business for Global Growth
                    </h1>
                </div>
                {/* Background Image */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] w-full z-0">
                    <Image
                        src="/get-started.png"
                        alt="Norxio Business Cards"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex-1 bg-[#F5F9FA] flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 min-h-screen overflow-y-auto">
                <div className="w-full max-w-lg lg:max-w-xl mx-auto space-y-8">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            <FormInputField
                                control={form.control}
                                name="email"
                                label="Work email"
                                placeholder="coleman@business.com"
                            />

                            <FormInputField
                                control={form.control}
                                name="fullName"
                                label="Full name"
                                placeholder="John Doe"
                            />

                            {/* Country Searchable Dropdown */}
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-gray-700 font-medium">Country of incorporation</FormLabel>
                                        <Popover open={openCountry} onOpenChange={setOpenCountry}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        aria-expanded={openCountry}
                                                        className={cn(
                                                            "h-12 w-full justify-between bg-white border border-gray-200 rounded-lg text-base font-normal hover:bg-white hover:text-gray-900",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value
                                                            ? countries.find((country) => country.value === field.value)?.label
                                                            : "Select country"}
                                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                                                <Command>
                                                    <CommandInput placeholder="Search" />
                                                    <CommandList>
                                                        <CommandEmpty>No country found.</CommandEmpty>
                                                        <CommandGroup className="max-h-60 overflow-y-auto">
                                                            {countries.map((country) => (
                                                                <CommandItem
                                                                    value={country.label}
                                                                    key={country.value}
                                                                    onSelect={() => {
                                                                        form.setValue("country", country.value);
                                                                        setOpenCountry(false);
                                                                    }}
                                                                >
                                                                    <span className="mr-2">{/* Flag emoji could go here if mapped */}</span>
                                                                    {country.label}
                                                                    <Check
                                                                        className={cn(
                                                                            "ml-auto h-4 w-4",
                                                                            country.value === field.value
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
                                                                        )}
                                                                    />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormInputField
                                control={form.control}
                                name="businessName"
                                label="Name of Business"
                                placeholder="Acme Corp"
                            />

                            {/* Estimated Monthly Payment */}
                            <FormField
                                control={form.control}
                                name="monthlyPayment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-medium">Estimated monthly cross-border payment</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-12 bg-white border-gray-200 rounded-lg text-base font-normal focus:ring-blue-600/20">
                                                    <SelectValue placeholder="Select volume" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="less than $100k">less than $100k</SelectItem>
                                                <SelectItem value="$100k - $500k">$100k - $500k</SelectItem>
                                                <SelectItem value="$500k - $2M">$500k - $2M</SelectItem>
                                                <SelectItem value="$2M - $10M">$2M - $10M</SelectItem>
                                                <SelectItem value="$10M+">$10M+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Primary Use Case (Checkboxes) */}
                            <FormField
                                control={form.control}
                                name="useCase"
                                render={() => (
                                    <FormItem>
                                        <div className="mb-4">
                                            <FormLabel className="text-gray-700 font-medium text-base">Primary use case</FormLabel>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2">
                                            {[
                                                { id: "Global payouts", label: "Global payouts" },
                                                { id: "Smart fx conversion", label: "Smart fx conversion" },
                                                { id: "Coporate cards", label: "Corporate cards" },
                                                { id: "Api integration", label: "Api integration" },
                                                { id: "Multi-currency account", label: "Multi-currency account" },
                                            ].map((item) => (
                                                <FormField
                                                    key={item.id}
                                                    control={form.control}
                                                    name="useCase"
                                                    render={({ field }) => {
                                                        return (
                                                            <FormItem
                                                                key={item.id}
                                                                className="flex flex-row items-center space-x-3 space-y-0"
                                                            >
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={field.value?.includes(item.id)}
                                                                        onCheckedChange={(checked) => {
                                                                            return checked
                                                                                ? field.onChange([...field.value, item.id])
                                                                                : field.onChange(
                                                                                    field.value?.filter(
                                                                                        (value) => value !== item.id
                                                                                    )
                                                                                )
                                                                        }}
                                                                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="text-sm font-normal text-gray-700 cursor-pointer">
                                                                    {item.label}
                                                                </FormLabel>
                                                            </FormItem>
                                                        )
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-base rounded-lg shadow-md hover:shadow-lg transition-all"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            </div>

                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

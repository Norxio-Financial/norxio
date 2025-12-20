import { NextResponse } from 'next/server';

// In-memory cache to store rates and reduce API calls to avoid rate limits
let rateCache: {
    timestamp: number;
    rates: Record<string, number>;
} | null = null;

// Cache duration: 1 hour
const CACHE_DURATION = 60 * 60 * 1000;

// Fallback rates to ensure the app functions even if the API rate limit is exceeded (Error 106)
// Based on approximate market rates
const FALLBACK_RATES: Record<string, number> = {
    EUR: 1,
    USD: 1.08,
    GBP: 0.85,
    JPY: 163.5,
    AUD: 1.65,
    CAD: 1.47,
    INR: 90.5,
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { from, to, amount } = body;

        if (!from || !to || !amount) {
            return NextResponse.json(
                { success: false, error: 'Missing required parameters' },
                { status: 400 }
            );
        }

        const apiKey = process.env.FIXER_API;
        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: 'Server configuration error' },
                { status: 500 }
            );
        }

        let rates: Record<string, number> | undefined = rateCache?.rates;
        const now = Date.now();

        // 1. Check if we have valid cached data
        if (rateCache && (now - rateCache.timestamp < CACHE_DURATION)) {
            // Use cached rates
            rates = rateCache.rates;
        } else {
            // 2. Fetch fresh rates from 'latest' endpoint
            // 'latest' is more reliable on free plans than 'convert'
            const url = `http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=${Object.keys(FALLBACK_RATES).join(',')}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.success) {
                    rates = data.rates;
                    // Update cache
                    rateCache = {
                        timestamp: now,
                        rates: data.rates
                    };
                } else {
                    // Handle API errors gracefully
                    const code = data.error?.code;
                    console.warn(`Fixer API Error (${code}): ${data.error?.type}. Mode: Fallback.`);

                    // If rate limit reached (106) or other common plan blocks, use fallback
                    // 104: Monthly Limit Reached
                    // 105: Base Currency Access Restricted (Free Plan)
                    // 106: Rate Limit Reached (Instant)
                    if ([104, 105, 106].includes(code)) {
                        rates = FALLBACK_RATES;
                    }
                }
            } catch (err) {
                console.error('Failed to fetch from Fixer:', err);
                // On network failure or critical error, default to fallback
                if (!rates) {
                    rates = FALLBACK_RATES;
                }
            }
        }

        // 3. Perform the conversion
        // Math: 1 USD -> X GBP?
        // Base is EUR (usually).
        // Rate[from] = 1 EUR in FROM currency
        // Rate[to]   = 1 EUR in TO currency
        // Amount (From) / Rate[from] = Amount in EUR
        // Amount in EUR * Rate[to] = Amount in TO

        // Ensure we have rates for both selected currencies
        if (rates && rates[from] && rates[to]) {
            const rateFrom = rates[from];
            const rateTo = rates[to];

            const convertedAmount = (amount / rateFrom) * rateTo;
            const exchangeRate = convertedAmount / amount;

            return NextResponse.json({
                success: true,
                result: convertedAmount,
                info: { rate: exchangeRate },
                // Optional: Flag to indicates if data is estimated/fallback
                meta: {
                    source: rateCache?.rates === FALLBACK_RATES ? 'estimated' : 'live'
                }
            });
        }

        return NextResponse.json(
            { success: false, error: 'Unable to calculate exchange rate for selected pair.' },
            { status: 422 }
        );

    } catch (error) {
        console.error('FX Exchange API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}

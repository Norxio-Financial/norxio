export type Language = "en" | "fr" | "es" | "de" | "ar";

export interface Translations {
    // Header
    header: {
        company: string;
        products: string;
        customers: string;
        resources: string;
        pricing: string;
        login: string;
        getStarted: string;
        learnAbout: string;
        exploreTools: string;
        industriesWeServe: string;
        guidesUpdates: string;
        // Company dropdown
        about: string;
        aboutDesc: string;
        careers: string;
        careersDesc: string;
        blog: string;
        blogDesc: string;
        // Products dropdown
        multiCurrency: string;
        multiCurrencyDesc: string;
        fxExchange: string;
        fxExchangeDesc: string;
        globalPayout: string;
        globalPayoutDesc: string;
        corporateCards: string;
        corporateCardsDesc: string;
        apiIntegration: string;
        apiIntegrationDesc: string;
        // Customers dropdown
        ecommerce: string;
        ecommerceDesc: string;
        freelancers: string;
        freelancersDesc: string;
        importExport: string;
        importExportDesc: string;
        education: string;
        educationDesc: string;
        // Resources dropdown
        security: string;
        securityDesc: string;
        contactUs: string;
        contactUsDesc: string;
    };
    // Hero Section
    hero: {
        badge: string;
        title: string;
        highlight: string;
        subtitle: string;
        primaryCta: string;
        secondaryCta: string;
    };
    // Trusted By
    trustedBy: {
        heading: string;
    };
    // Features Section
    features: {
        badge: string;
        title: string;
        subtitle: string;
        globalPayments: string;
        globalPaymentsDesc: string;
        virtualCards: string;
        virtualCardsDesc: string;
        multiCurrency: string;
        multiCurrencyDesc: string;
        smartFx: string;
        smartFxDesc: string;
        apiIntegration: string;
        apiIntegrationDesc: string;
    };
    // Why Trust Us Section
    whyTrust: {
        badge: string;
        title: string;
        subtitle: string;
        bulletPoint1: string;
        bulletPoint2: string;
        transparentFx: string;
        transparentFxDesc: string;
        globalBusiness: string;
        globalBusinessDesc: string;
        alwaysOn: string;
        alwaysOnDesc: string;
        gradeSecurity: string;
        gradeSecurityDesc: string;
    };
    // Help Grow Section
    helpGrow: {
        title: string;
        card1Title: string;
        card1Desc: string;
        card2Title: string;
        card2Desc: string;
        card3Title: string;
        card3Desc: string;
    };
    // All In One Section
    allInOne: {
        badge: string;
        title: string;
    };
    // Security Section
    security: {
        badge: string;
        title: string;
        subtitle: string;
        enterprise: string;
        enterpriseDesc: string;
        encryption: string;
        encryptionDesc: string;
        compliance: string;
        complianceDesc: string;
    };
    // Pricing Section
    pricing: {
        badge: string;
        title: string;
        subtitle: string;
        lite: string;
        liteDesc: string;
        enterprise: string;
        enterpriseDesc: string;
        business: string;
        businessDesc: string;
        perMonth: string;
        customPricing: string;
        startFree: string;
        upgradeNow: string;
        speakToSales: string;
        multiCurrencyAccount: string;
        transparentFxRates: string;
        globalPayouts: string;
        virtualCards: string;
        emailSupport: string;
        simpleDashboard: string;
        multiCurrencyAccounts: string;
        betterFxRates: string;
        sameDayPayouts: string;
        multipleVirtualCards: string;
        advancedReporting: string;
        prioritySupport: string;
        multiCurrencyInfra: string;
        customFxPricing: string;
        globalPayoutsSla: string;
        unlimitedCards: string;
        apiAccess: string;
        dedicatedManager: string;
    };
    // FAQ Section
    faq: {
        badge: string;
        title: string;
        subtitle: string;
        q1: string;
        a1: string;
        q2: string;
        a2: string;
        q3: string;
        a3: string;
        q4: string;
        a4: string;
        q5: string;
        a5: string;
        q6: string;
        a6: string;
        q7: string;
        a7: string;
        q8: string;
        a8: string;
        q9: string;
        a9: string;
        q10: string;
        a10: string;
    };
    // CTA Section
    cta: {
        title: string;
        subtitle: string;
        buttonText: string;
    };
    // Footer Section
    footer: {
        tagline: string;
        company: string;
        product: string;
        resources: string;
        legal: string;
        about: string;
        careers: string;
        blog: string;
        multiCurrency: string;
        fxExchange: string;
        globalPayouts: string;
        virtualCards: string;
        security: string;
        support: string;
        contact: string;
        terms: string;
        privacy: string;
        cookies: string;
        copyright: string;
    };
    // Common
    common: {
        learnMore: string;
        readMore: string;
        viewAll: string;
        send: string;
        receive: string;
        convert: string;
        countries: string;
        currencies: string;
        getStarted: string;
        contactSales: string;
    };
    // About Page
    about: {
        badge: string;
        title: string;
        subtitle: string;
        missionTitle: string;
        missionDesc: string;
        visionTitle: string;
        visionDesc: string;
    };
    // Careers Page
    careers: {
        badge: string;
        title: string;
        subtitle: string;
        cultureTitle: string;
        cultureDesc: string;
        openPositions: string;
        noPositions: string;
        applyNow: string;
    };
    // Compare Plans
    comparePlans: {
        title: string;
        subtitle: string;
        feature: string;
        lite: string;
        business: string;
        custom: string;
        coreFeature: string;
        monthlyFee: string;
        virtualCard: string;
        fxMarkup: string;
        multiCurrencyWallet: string;
        globalPayoutLimit: string;
        localAccountDetails: string;
        transfersExchange: string;
        internationalTransfers: string;
        supportedCurrencies: string;
        exchangeSpeed: string;
        payoutCountries: string;
        supportIntegrations: string;
        support: string;
        apiAccess: string;
        accountingIntegrations: string;
        customWorkflows: string;
        cardControls: string;
        spendingLimits: string;
        freezeUnfreeze: string;
        teamCards: string;
        fraudProtection: string;
    };
    // Products Pages
    products: {
        multiCurrency: {
            badge: string;
            title: string;
            subtitle: string;
        };
        fxExchange: {
            badge: string;
            title: string;
            subtitle: string;
        };
        globalPayout: {
            badge: string;
            title: string;
            subtitle: string;
        };
        corporateCards: {
            badge: string;
            title: string;
            subtitle: string;
        };
        apiIntegration: {
            badge: string;
            title: string;
            subtitle: string;
        };
    };
    // Stats Section
    stats: {
        countriesPayout: string;
        lowerFx: string;
        instantSettlement: string;
        apiPayments: string;
    };
    // Regulatory Requirements Page
    regulatory?: {
        title: string;
        subtitle: string;
        uk: string;
        ukDesc: string;
        germany: string;
        germanyDesc: string;
        uae: string;
        uaeDesc: string;
        usa: string;
        usaDesc: string;
        china: string;
        chinaDesc: string;
    };
    // 404 Not Found Page
    notFound?: {
        title: string;
        description: string;
        goHome: string;
        talkToSales: string;
    };
    // Get Started Page
    getStarted?: {
        title: string;
        subtitle: string;
        workEmail: string;
        fullName: string;
        country: string;
        businessName: string;
        monthlyPayment: string;
        useCase: string;
        submit: string;
        submitting: string;
        successTitle: string;
        successMessage: string;
        goBackHome: string;
    };
}

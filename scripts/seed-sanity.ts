/**
 * Sanity Complete Data Seeding - EXACT WEBSITE CONTENT
 * Seeds ALL pages with the actual content currently displayed
 * Run with: npm run seed
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiToken = process.env.SANITY_API_TOKEN;

if (!projectId || projectId === "your_project_id" || !apiToken) {
  console.error("❌ Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token: apiToken, useCdn: false, apiVersion: "2024-01-01" });

const L = (en: string, fr = en, es = en, de = en, ar = en) => ({ en, fr, es, de, ar });

// ===================== SITE SETTINGS =====================
const siteSettings = {
  _type: "siteSettings", _id: "siteSettings",
  siteName: "Norxio",
  defaultLanguage: "en",
  headerCta: { text: L("Get Started", "Commencer", "Comenzar", "Loslegen", "ابدأ الآن"), href: "/get-started" },
  footerTagline: L(
    "A smarter way for businesses to hold, convert, and move money globally.",
    "Une façon plus intelligente pour les entreprises de détenir, convertir et transférer de l'argent à l'échelle mondiale.",
    "Una forma más inteligente para que las empresas mantengan, conviertan y muevan dinero a nivel mundial.",
    "Eine intelligentere Möglichkeit für Unternehmen, Geld weltweit zu halten, umzutauschen und zu bewegen.",
    "طريقة أذكى للشركات للاحتفاظ بالأموال وتحويلها ونقلها عالميًا."
  ),
  footerColumns: [
    {
      title: L("Company", "Entreprise", "Empresa", "Unternehmen", "الشركة"), links: [
        { label: L("About", "À propos", "Acerca de", "Über uns", "حول"), href: "/about" },
        { label: L("Careers", "Carrières", "Carreras", "Karriere", "الوظائف"), href: "/careers" },
        { label: L("Blog", "Blog", "Blog", "Blog", "المدونة"), href: "/blog" }
      ]
    },
    {
      title: L("Product", "Produit", "Producto", "Produkt", "المنتج"), links: [
        { label: L("Multi-Currency Accounts", "Comptes multi-devises", "Cuentas multidivisa", "Multiwährungskonten", "حسابات متعددة العملات"), href: "/products/multi-currency-account" },
        { label: L("FX Exchange", "Change de devises", "Cambio de divisas", "Devisenwechsel", "صرف العملات"), href: "/products/fx-exchange" },
        { label: L("Global Payouts", "Paiements mondiaux", "Pagos globales", "Globale Auszahlungen", "المدفوعات العالمية"), href: "/products/global-payout" },
        { label: L("Virtual Cards", "Cartes virtuelles", "Tarjetas virtuales", "Virtuelle Karten", "البطاقات الافتراضية"), href: "/products/corporate-cards" },
        { label: L("API Integration", "Intégration API", "Integración API", "API-Integration", "تكامل API"), href: "/products/api-integration" }
      ]
    },
    {
      title: L("Resources", "Ressources", "Recursos", "Ressourcen", "الموارد"), links: [
        { label: L("Security", "Sécurité", "Seguridad", "Sicherheit", "الأمان"), href: "/resources/security" },
        { label: L("Support", "Support", "Soporte", "Support", "الدعم"), href: "/support" },
        { label: L("Contact", "Contact", "Contacto", "Kontakt", "اتصال"), href: "/get-started" }
      ]
    },
    {
      title: L("Legal", "Légal", "Legal", "Rechtliches", "قانوني"), links: [
        { label: L("Terms", "Conditions", "Términos", "Bedingungen", "الشروط"), href: "/legal/terms" },
        { label: L("Privacy", "Confidentialité", "Privacidad", "Datenschutz", "الخصوصية"), href: "/legal/privacy" },
        { label: L("Cookies", "Cookies", "Cookies", "Cookies", "ملفات تعريف الارتباط"), href: "/legal/cookie" }
      ]
    }
  ],
  footerCopyright: L("© 2026 Norxio. All rights reserved."),
  socialLinks: [
    { platform: "twitter", url: "https://twitter.com/norxio" },
    { platform: "linkedin", url: "https://linkedin.com/company/norxio" },
    { platform: "instagram", url: "https://instagram.com/norxio" }
  ],
  contactEmail: "hello@norxio.com", supportEmail: "support@norxio.com", salesEmail: "sales@norxio.com"
};

// ===================== HOME PAGE - EXACT CONTENT =====================
const homePage = {
  _type: "homePage", _id: "homePage",

  // Hero - Exact content from website
  heroBadge: L("Payment Solutions", "Solutions de paiement", "Soluciones de pago", "Zahlungslösungen", "حلول الدفع"),
  heroTitle: L(
    "Global payments, one account to power your",
    "Paiements mondiaux, un seul compte pour alimenter votre",
    "Pagos globales, una cuenta para impulsar tu",
    "Globale Zahlungen, ein Konto für Ihr",
    "مدفوعات عالمية، حساب واحد لتشغيل"
  ),
  heroHighlight: L("business", "entreprise", "negocio", "Unternehmen", "أعمالك"),
  heroSubtitle: L(
    "Manage money worldwide with multi-currency accounts, clear and transparent FX pricing, and fast payouts.",
    "Gérez votre argent dans le monde entier avec des comptes multi-devises, des tarifs FX clairs et transparents, et des paiements rapides.",
    "Gestiona dinero en todo el mundo con cuentas multidivisa, precios FX claros y transparentes, y pagos rápidos.",
    "Verwalten Sie Geld weltweit mit Multiwährungskonten, klaren und transparenten FX-Preisen und schnellen Auszahlungen.",
    "إدارة الأموال في جميع أنحاء العالم مع حسابات متعددة العملات، وأسعار صرف واضحة وشفافة، ودفعات سريعة."
  ),
  heroPrimaryCta: { text: L("Open an account", "Ouvrir un compte", "Abrir cuenta", "Konto eröffnen", "افتح حساباً"), href: "/get-started", variant: "primary" },
  heroSecondaryCta: { text: L("Talk to Sales", "Parler aux ventes", "Hablar con ventas", "Mit dem Vertrieb sprechen", "تحدث إلى المبيعات"), href: "/get-started", variant: "outline" },

  // Stats - Exact values from Stats.tsx
  stats: [
    { value: "190+", label: L("Countries we can payout to", "Pays vers lesquels nous pouvons payer", "Países a los que podemos pagar", "Länder, in die wir auszahlen können", "دول يمكننا الدفع إليها") },
    { value: "45%", label: L("Lower FX VS Traditional Banks", "FX moins cher que les banques traditionnelles", "FX más bajo que los Bancos Tradicionales", "Niedrigere FX als traditionelle Banken", "صرف أقل من البنوك التقليدية") },
    { value: "T+0", label: L("Instant or same day settlement", "Règlement instantané ou le jour même", "Liquidación instantánea o en el mismo día", "Sofortige oder tägliche Abwicklung", "تسوية فورية أو في نفس اليوم") },
    { value: "100%", label: L("API Automated Payments", "Paiements automatisés par API", "Pagos Automatizados por API", "API-automatisierte Zahlungen", "مدفوعات مؤتمتة عبر API") }
  ],

  // Features - Exact content 
  featuresBadge: L("Our Services", "Nos Services", "Nuestros Servicios", "Unsere Dienstleistungen", "خدماتنا"),
  featuresTitle: L("What we offer", "Ce que nous offrons", "Lo que ofrecemos", "Was wir bieten", "ما نقدمه"),
  featuresSubtitle: L(
    "A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.",
    "Un processus simple qui permet à votre entreprise de détenir, convertir et envoyer de l'argent dans le monde entier.",
    "Un proceso simple que permite a su empresa mantener, convertir y enviar dinero en todo el mundo.",
    "Ein einfacher Prozess, mit dem Ihr Unternehmen Geld weltweit halten, umtauschen und senden kann.",
    "عملية بسيطة تتيح لشركتك الاحتفاظ بالأموال وتحويلها وإرسالها عالميًا."
  ),
  featureCards: [
    { icon: "globe", title: L("Global payments", "Paiements mondiaux", "Pagos globales", "Globale Zahlungen", "المدفوعات العالمية"), description: L("Send and receive funds easily to and from over 180 countries.", "Envoyez et recevez des fonds vers et depuis plus de 180 pays.", "Envíe y reciba fondos fácilmente hacia y desde más de 180 países.", "Senden und empfangen Sie einfach Gelder in und aus über 180 Ländern.", "إرسال واستقبال الأموال بسهولة من وإلى أكثر من 180 دولة."), link: "/products/global-payout", color: "blue" },
    { icon: "credit-card", title: L("Virtual & physical cards", "Cartes virtuelles et physiques", "Tarjetas virtuales y físicas", "Virtuelle und physische Karten", "بطاقات افتراضية وفعلية"), description: L("Create cards for your team and track spending in real-time.", "Créez des cartes et suivez les dépenses en temps réel.", "Cree tarjetas y realice un seguimiento de los gastos en tiempo real.", "Erstellen Sie Karten und verfolgen Sie Ausgaben in Echtzeit.", "أنشئ بطاقات وتتبع الإنفاق في الوقت الفعلي."), link: "/products/corporate-cards", color: "blue" },
    { icon: "wallet", title: L("Multi-currency", "Multi-devises", "Multidivisa", "Mehrwährung", "متعدد العملات"), description: L("Hold and manage money in over 30+ currencies in one account.", "Détenez et gérez de l'argent dans plus de 30 devises.", "Mantenga y administre dinero en más de 30 monedas.", "Halten und verwalten Sie Geld in über 30 Währungen.", "احتفظ وأدر الأموال بأكثر من 30 عملة."), link: "/products/multi-currency-account", color: "blue" },
    { icon: "arrow-left-right", title: L("Smart FX Conversion", "Conversion FX intelligente", "Conversión FX inteligente", "Intelligente FX-Konvertierung", "تحويل العملات الذكي"), description: L("Convert currencies instantly with transparent, competitive rates.", "Convertissez des devises instantanément avec des taux transparents.", "Convierta monedas instantáneamente con tasas transparentes.", "Tauschen Sie Währungen sofort mit transparenten Kursen.", "حوّل العملات فورًا بأسعار شفافة."), link: "/products/fx-exchange", color: "blue" },
    { icon: "code", title: L("API Integration", "Intégration API", "Integración API", "API-Integration", "تكامل API"), description: L("Create custom processes with our comprehensive REST API integrations.", "Créez des processus personnalisés avec nos intégrations API REST.", "Cree procesos personalizados con nuestras integraciones API REST.", "Erstellen Sie benutzerdefinierte Prozesse mit unseren REST-API-Integrationen.", "أنشئ عمليات مخصصة مع تكاملات REST API."), link: "/products/api-integration", color: "blue" }
  ],

  // Why Trust - Exact content
  whyTrustBadge: L("Our Services", "Nos Services", "Nuestros Servicios", "Unsere Dienstleistungen", "خدماتنا"),
  whyTrustTitle: L("Why businesses trust us", "Pourquoi les entreprises nous font confiance", "Por qué las empresas confían en nosotros", "Warum Unternehmen uns vertrauen", "لماذا تثق الشركات بنا"),
  whyTrustSubtitle: L("Built to help global businesses move money smarter, faster, and more transparently.", "Conçu pour aider les entreprises mondiales à déplacer l'argent plus intelligemment.", "Diseñado para ayudar a las empresas globales a mover dinero de manera más inteligente.", "Entwickelt, um Unternehmen zu helfen, Geld intelligenter zu bewegen.", "مصمم لمساعدة الشركات العالمية على نقل الأموال بشكل أذكى."),
  whyTrustCards: [
    { icon: "dollar-sign", title: L("Transparent FX Rates", "Taux FX transparents", "Tasas FX transparentes", "Transparente FX-Kurse", "أسعار صرف شفافة"), description: L("Hold, receive, and manage multiple currencies without opening multiple bank accounts.", "Détenez, recevez et gérez plusieurs devises sans ouvrir plusieurs comptes.", "Mantenga, reciba y administre múltiples monedas sin abrir múltiples cuentas.", "Halten Sie mehrere Währungen ohne mehrere Bankkonten.", "احتفظ واستقبل وأدر العديد من العملات.") },
    { icon: "globe", title: L("Designed for Global Businesses", "Conçu pour les entreprises mondiales", "Diseñado para empresas globales", "Für globale Unternehmen entwickelt", "مصمم للشركات العالمية"), description: L("Every transaction is protected with end-to-end encryption, real-time compliance checks, and continuous fraud monitoring.", "Chaque transaction est protégée par un cryptage et une conformité en temps réel.", "Cada transacción está protegida con encriptación y cumplimiento en tiempo real.", "Jede Transaktion ist durch Verschlüsselung und Compliance geschützt.", "كل معاملة محمية بتشفير وامتثال في الوقت الفعلي.") },
    { icon: "clock", title: L("Always On, Always Reliable", "Toujours actif, toujours fiable", "Siempre activo, siempre confiable", "Immer an, immer zuverlässig", "دائمًا متاح، دائمًا موثوق"), description: L("Same-day payouts in many regions. Money moves when you need it, without delays.", "Paiements le jour même. L'argent se déplace quand vous en avez besoin.", "Pagos el mismo día. El dinero se mueve cuando lo necesitas.", "Auszahlung am selben Tag. Geld bewegt sich, wenn Sie es brauchen.", "دفعات في نفس اليوم. الأموال تتحرك عندما تحتاجها.") },
    { icon: "shield", title: L("Enterprise-Grade Security", "Sécurité de niveau entreprise", "Seguridad de nivel empresarial", "Sicherheit auf Unternehmensebene", "أمان على مستوى المؤسسات"), description: L("We use bank-level protections so your currency conversions is clear, upfront, and free from hidden fees.", "Nous utilisons des protections de niveau bancaire pour des conversions claires.", "Usamos protecciones de nivel bancario para conversiones claras.", "Wir verwenden Schutzmaßnahmen auf Bankniveau für klare Konvertierungen.", "نستخدم حماية على مستوى البنوك لتحويلات واضحة.") }
  ],

  // Security Section
  securityBadge: L("Security", "Sécurité", "Seguridad", "Sicherheit", "الأمان"),
  securityTitle: L("Security You Can Trust", "Une sécurité en qui vous pouvez avoir confiance", "Seguridad en la que puedes confiar", "Sicherheit, der Sie vertrauen können", "أمان يمكنك الوثوق به"),
  securitySubtitle: L("Norxio protects every transaction with advanced encryption, strict access controls, real-time threat monitoring, and global compliance standards—keeping your business safe at every step.", "Norxio protège chaque transaction avec un cryptage avancé et des contrôles stricts.", "Norxio protege cada transacción con encriptación avanzada y controles estrictos.", "Norxio schützt jede Transaktion mit fortschrittlicher Verschlüsselung.", "تحمي Norxio كل معاملة بتشفير متقدم وضوابط صارمة."),

  // Pricing
  pricingBadge: L("Pricing", "Tarifs", "Precios", "Preise", "الأسعار"),
  pricingTitle: L("Simple, Transparent Pricing", "Des tarifs simples et transparents", "Precios simples y transparentes", "Einfache, transparente Preise", "أسعار بسيطة وشفافة"),
  pricingSubtitle: L("Choose a plan that fits your business. No hidden fees, no surprises—just clear rates and full transparency.", "Choisissez un plan adapté. Pas de frais cachés.", "Elija un plan que se adapte. Sin tarifas ocultas.", "Wählen Sie einen Plan. Keine versteckten Gebühren.", "اختر خطة تناسبك. بدون رسوم مخفية."),
  pricingPlans: [
    { name: L("Lite"), audience: L("For small businesses", "Pour les petites entreprises", "Para pequeñas empresas", "Für kleine Unternehmen", "للشركات الصغيرة"), price: "$0", period: L("/month", "/mois", "/mes", "/Monat", "/شهر"), features: ["Multi-currency account", "Transparent FX rates", "Global payouts", "Virtual cards", "Email support", "Simple dashboard & reporting"], cta: L("Start free", "Commencer gratuitement", "Comenzar gratis", "Kostenlos starten", "ابدأ مجانًا"), isDark: false },
    { name: L("Enterprise", "Entreprise", "Empresa", "Enterprise", "المؤسسات"), audience: L("For SMEs", "Pour les PME", "Para PYMES", "Für KMU", "للشركات المتوسطة"), price: "$80", period: L("/month", "/mois", "/mes", "/Monat", "/شهر"), features: ["Multi-currency accounts", "Better FX rates", "Same-day payouts to major corridors", "Multiple virtual cards + spend controls", "Advanced reporting & reconciliation", "Priority customer support"], cta: L("Upgrade now", "Passer au supérieur", "Actualizar ahora", "Jetzt upgraden", "ترقية الآن"), isDark: true },
    { name: L("Business", "Business", "Negocio", "Business", "الأعمال"), audience: L("For large companies", "Pour les grandes entreprises", "Para grandes empresas", "Für große Unternehmen", "للشركات الكبيرة"), price: "Custom", period: L(" pricing", " tarification", " precios", " Preise", " تسعير"), features: ["Multi-currency infrastructure", "Custom FX Pricing", "Global payouts with SLAs", "Unlimited cards + real-time controls", "API access & system integrations", "Dedicated account manager support"], cta: L("Speak to sales", "Parler aux ventes", "Hablar con ventas", "Vertrieb kontaktieren", "تحدث إلى المبيعات"), isDark: false }
  ],

  // FAQ - All 10 questions and answers from translations
  faqBadge: L("FAQ", "FAQ", "FAQ", "FAQ", "الأسئلة الشائعة"),
  faqTitle: L("Frequently Asked Questions", "Questions fréquemment posées", "Preguntas frecuentes", "Häufig gestellte Fragen", "الأسئلة المتكررة"),
  faqSubtitle: L("Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.", "Obtenez des réponses rapides aux questions les plus courantes sur la façon dont Norxio aide votre entreprise à gérer les paiements mondiaux.", "Obtenga respuestas rápidas a las preguntas más comunes sobre cómo Norxio ayuda a su empresa a gestionar pagos globales.", "Erhalten Sie schnelle Antworten auf die häufigsten Fragen darüber, wie Norxio Ihrem Unternehmen hilft, globale Zahlungen zu verwalten.", "احصل على إجابات سريعة للأسئلة الأكثر شيوعًا حول كيفية مساعدة Norxio لشركتك في إدارة المدفوعات العالمية."),
  faqItems: [
    { question: L("What is Norxio?", "Qu'est-ce que Norxio?", "¿Qué es Norxio?", "Was ist Norxio?", "ما هو Norxio؟"), answer: L("Norxio is a global payments platform that helps businesses manage multi-currency accounts, make international transfers, and access transparent FX rates.", "Norxio est une plateforme de paiements mondiale qui aide les entreprises à gérer des comptes multi-devises, effectuer des transferts internationaux et accéder à des taux de change transparents.", "Norxio es una plataforma de pagos global que ayuda a las empresas a gestionar cuentas multidivisa, realizar transferencias internacionales y acceder a tasas de cambio transparentes.", "Norxio ist eine globale Zahlungsplattform, die Unternehmen bei der Verwaltung von Multiwährungskonten, internationalen Überweisungen und transparenten Wechselkursen hilft.", "Norxio هي منصة مدفوعات عالمية تساعد الشركات في إدارة حسابات متعددة العملات وإجراء التحويلات الدولية والوصول إلى أسعار صرف شفافة.") },
    { question: L("Who can use Norxio?", "Qui peut utiliser Norxio?", "¿Quién puede usar Norxio?", "Wer kann Norxio nutzen?", "من يمكنه استخدام Norxio؟"), answer: L("Any business looking to manage global payments, from startups to enterprises, can use Norxio.", "Toute entreprise souhaitant gérer des paiements mondiaux, des startups aux grandes entreprises, peut utiliser Norxio.", "Cualquier empresa que busque gestionar pagos globales, desde startups hasta grandes empresas, puede usar Norxio.", "Jedes Unternehmen, das globale Zahlungen verwalten möchte, von Startups bis zu Großunternehmen, kann Norxio nutzen.", "أي شركة تتطلع لإدارة المدفوعات العالمية، من الشركات الناشئة إلى المؤسسات الكبرى، يمكنها استخدام Norxio.") },
    { question: L("How fast are international payouts?", "À quelle vitesse sont les paiements internationaux?", "¿Qué tan rápidos son los pagos internacionales?", "Wie schnell sind internationale Auszahlungen?", "ما مدى سرعة المدفوعات الدولية؟"), answer: L("Most international payouts are processed same-day in major corridors. Transfer times may vary depending on the destination country and currency.", "La plupart des paiements internationaux sont traités le jour même dans les principaux corridors. Les délais de transfert peuvent varier selon le pays de destination et la devise.", "La mayoría de los pagos internacionales se procesan el mismo día en los principales corredores. Los tiempos de transferencia pueden variar según el país de destino y la moneda.", "Die meisten internationalen Auszahlungen werden am selben Tag in wichtigen Korridoren verarbeitet. Die Überweisungszeiten können je nach Zielland und Währung variieren.", "معظم المدفوعات الدولية تتم معالجتها في نفس اليوم في الممرات الرئيسية. قد تختلف أوقات التحويل حسب بلد الوجهة والعملة.") },
    { question: L("Is Norxio secure?", "Norxio est-il sécurisé?", "¿Es seguro Norxio?", "Ist Norxio sicher?", "هل Norxio آمن؟"), answer: L("Yes. We use bank-level security including multi-factor authentication, end-to-end encryption, and continuous fraud monitoring.", "Oui. Nous utilisons une sécurité de niveau bancaire comprenant l'authentification multifacteur, le cryptage de bout en bout et une surveillance continue de la fraude.", "Sí. Utilizamos seguridad de nivel bancario que incluye autenticación multifactor, encriptación de extremo a extremo y monitoreo continuo de fraude.", "Ja. Wir verwenden Sicherheit auf Bankniveau, einschließlich Multi-Faktor-Authentifizierung, End-to-End-Verschlüsselung und kontinuierlicher Betrugserkennung.", "نعم. نستخدم أمانًا على مستوى البنوك بما في ذلك المصادقة متعددة العوامل والتشفير من طرف إلى طرف والمراقبة المستمرة للاحتيال.") },
    { question: L("Can I hold multiple currencies in one account?", "Puis-je détenir plusieurs devises dans un seul compte?", "¿Puedo tener múltiples monedas en una cuenta?", "Kann ich mehrere Währungen in einem Konto halten?", "هل يمكنني الاحتفاظ بعملات متعددة في حساب واحد؟"), answer: L("Yes, you can hold, receive, and manage over 30+ currencies in a single Norxio account.", "Oui, vous pouvez détenir, recevoir et gérer plus de 30 devises dans un seul compte Norxio.", "Sí, puede tener, recibir y administrar más de 30 monedas en una sola cuenta Norxio.", "Ja, Sie können über 30 Währungen in einem einzigen Norxio-Konto halten, empfangen und verwalten.", "نعم، يمكنك الاحتفاظ واستقبال وإدارة أكثر من 30 عملة في حساب Norxio واحد.") },
    { question: L("Can I send money to any country?", "Puis-je envoyer de l'argent à n'importe quel pays?", "¿Puedo enviar dinero a cualquier país?", "Kann ich Geld in jedes Land senden?", "هل يمكنني إرسال الأموال لأي دولة؟"), answer: L("Norxio supports transfers to 180+ countries worldwide with local payment rails in major markets.", "Norxio prend en charge les transferts vers plus de 180 pays dans le monde avec des rails de paiement locaux sur les principaux marchés.", "Norxio admite transferencias a más de 180 países en todo el mundo con rieles de pago locales en los principales mercados.", "Norxio unterstützt Überweisungen in über 180 Länder weltweit mit lokalen Zahlungsschienen in wichtigen Märkten.", "تدعم Norxio التحويلات إلى أكثر من 180 دولة حول العالم مع قنوات دفع محلية في الأسواق الرئيسية.") },
    { question: L("How does Norxio keep my money safe?", "Comment Norxio protège-t-il mon argent?", "¿Cómo Norxio mantiene mi dinero seguro?", "Wie schützt Norxio mein Geld?", "كيف تحافظ Norxio على أمان أموالي؟"), answer: L("Your funds are held in segregated accounts with trusted banking partners, protected by enterprise-grade security.", "Vos fonds sont détenus dans des comptes séparés auprès de partenaires bancaires de confiance, protégés par une sécurité de niveau entreprise.", "Sus fondos se mantienen en cuentas segregadas con socios bancarios de confianza, protegidos por seguridad de nivel empresarial.", "Ihre Gelder werden in getrennten Konten bei vertrauenswürdigen Bankpartnern gehalten, geschützt durch Sicherheit auf Unternehmensebene.", "يتم الاحتفاظ بأموالك في حسابات منفصلة مع شركاء مصرفيين موثوقين، محمية بأمان على مستوى المؤسسات.") },
    { question: L("How do virtual accounts work?", "Comment fonctionnent les comptes virtuels?", "¿Cómo funcionan las cuentas virtuales?", "Wie funktionieren virtuelle Konten?", "كيف تعمل الحسابات الافتراضية؟"), answer: L("Virtual accounts allow you to receive payments in local currencies without needing a physical bank account in that country.", "Les comptes virtuels vous permettent de recevoir des paiements en devises locales sans avoir besoin d'un compte bancaire physique dans ce pays.", "Las cuentas virtuales le permiten recibir pagos en monedas locales sin necesidad de una cuenta bancaria física en ese país.", "Virtuelle Konten ermöglichen es Ihnen, Zahlungen in lokalen Währungen zu empfangen, ohne ein physisches Bankkonto in diesem Land zu benötigen.", "تتيح لك الحسابات الافتراضية استلام المدفوعات بالعملات المحلية دون الحاجة إلى حساب مصرفي فعلي في ذلك البلد.") },
    { question: L("What is FX transparency?", "Qu'est-ce que la transparence FX?", "¿Qué es la transparencia FX?", "Was ist FX-Transparenz?", "ما هي شفافية الصرف الأجنبي؟"), answer: L("FX transparency means you see the real exchange rate before every transaction with no hidden fees.", "La transparence FX signifie que vous voyez le taux de change réel avant chaque transaction sans frais cachés.", "La transparencia FX significa que ve el tipo de cambio real antes de cada transacción sin tarifas ocultas.", "FX-Transparenz bedeutet, dass Sie den echten Wechselkurs vor jeder Transaktion ohne versteckte Gebühren sehen.", "شفافية الصرف الأجنبي تعني أنك ترى سعر الصرف الحقيقي قبل كل معاملة بدون رسوم مخفية.") },
    { question: L("Are there limits on transactions?", "Y a-t-il des limites sur les transactions?", "¿Hay límites en las transacciones?", "Gibt es Transaktionslimits?", "هل هناك حدود للمعاملات؟"), answer: L("Transaction limits depend on your plan and verification level. Enterprise customers can request custom limits.", "Les limites de transaction dépendent de votre forfait et de votre niveau de vérification. Les clients entreprise peuvent demander des limites personnalisées.", "Los límites de transacción dependen de su plan y nivel de verificación. Los clientes empresariales pueden solicitar límites personalizados.", "Transaktionslimits hängen von Ihrem Plan und Verifizierungslevel ab. Unternehmenskunden können benutzerdefinierte Limits anfordern.", "تعتمد حدود المعاملات على خطتك ومستوى التحقق. يمكن لعملاء المؤسسات طلب حدود مخصصة.") }
  ],

  // CTA
  ctaTitle: L("Start Moving Money Smarter", "Commencez à déplacer l'argent plus intelligemment", "Comienza a mover dinero de manera más inteligente", "Beginnen Sie, Geld intelligenter zu bewegen", "ابدأ في نقل الأموال بشكل أذكى"),
  ctaSubtitle: L("Join businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.", "Rejoignez les entreprises qui utilisent Norxio.", "Únase a las empresas que usan Norxio.", "Schließen Sie sich Unternehmen an, die Norxio nutzen.", "انضم إلى الشركات التي تستخدم Norxio."),
  ctaButton: { text: L("Get started", "Commencer", "Comenzar", "Loslegen", "ابدأ الآن"), href: "/get-started", variant: "primary" }
};

// ===================== ABOUT PAGE =====================
const aboutPage = {
  _type: "aboutPage", _id: "aboutPage",
  heroBadge: L("About", "À propos", "Acerca de", "Über uns", "حول"),
  heroTitle: L("Your Partner for Smarter Global Finance", "Votre partenaire pour une finance mondiale plus intelligente", "Su socio para finanzas globales más inteligentes", "Ihr Partner für smartere globale Finanzen", "شريكك للتمويل العالمي الأذكى"),
  heroSubtitle: L("Norxio is a new standard in cross-border payments and financial technology. We help businesses expand globally by simplifying currency exchange and payouts to the world.", "Norxio est un nouveau standard dans les paiements transfrontaliers.", "Norxio es un nuevo estándar en pagos transfronterizos.", "Norxio ist ein neuer Standard bei grenzüberschreitenden Zahlungen.", "Norxio هو معيار جديد في المدفوعات عبر الحدود."),
  missionTitle: L("Our Mission", "Notre Mission", "Nuestra Misión", "Unsere Mission", "مهمتنا"),
  missionContent: L("To simplify global finance for businesses of all sizes.", "Simplifier la finance mondiale pour toutes les entreprises.", "Simplificar las finanzas globales para empresas de todos los tamaños.", "Globale Finanzen für Unternehmen jeder Größe vereinfachen.", "تبسيط التمويل العالمي للشركات من جميع الأحجام."),
  visionTitle: L("Our Vision", "Notre Vision", "Nuestra Visión", "Unsere Vision", "رؤيتنا"),
  visionContent: L("A world where money moves freely across borders.", "Un monde où l'argent circule librement.", "Un mundo donde el dinero se mueve libremente.", "Eine Welt, in der Geld frei fließt.", "عالم يتحرك فيه المال بحرية عبر الحدود."),
  ctaTitle: L("Join Our Team", "Rejoignez Notre Équipe", "Únete a Nuestro Equipo", "Treten Sie Unserem Team Bei", "انضم لفريقنا"),
  ctaSubtitle: L("Help us build the future of global payments.", "Aidez-nous à construire l'avenir des paiements.", "Ayúdanos a construir el futuro de los pagos.", "Helfen Sie uns, die Zukunft zu gestalten.", "ساعدنا في بناء مستقبل المدفوعات.")
};

// ===================== CAREERS PAGE =====================  
const careersPage = {
  _type: "careersPage", _id: "careersPage",
  heroBadge: L("Careers", "Carrières", "Carreras", "Karriere", "الوظائف"),
  heroTitle: L("Build the Future of Global Payments With Us", "Construisez l'avenir des paiements avec nous", "Construye el futuro de los pagos con nosotros", "Bauen Sie die Zukunft der Zahlungen mit uns", "ابنِ مستقبل المدفوعات العالمية معنا"),
  heroSubtitle: L("Join our team and help shape the future of financial technology.", "Rejoignez notre équipe et façonnez l'avenir.", "Únase a nuestro equipo y ayude a dar forma al futuro.", "Treten Sie unserem Team bei und gestalten Sie die Zukunft.", "انضم إلى فريقنا وساعد في تشكيل المستقبل."),
  cultureTitle: L("Our Culture", "Notre Culture", "Nuestra Cultura", "Unsere Kultur", "ثقافتنا"),
  cultureSubtitle: L("We believe in collaboration, innovation, and making an impact.", "Nous croyons en la collaboration et l'innovation.", "Creemos en la colaboración y la innovación.", "Wir glauben an Zusammenarbeit und Innovation.", "نؤمن بالتعاون والابتكار وإحداث تأثير."),
  cultureValues: [
    { icon: "lightbulb", title: L("Innovation First"), description: L("We push boundaries and embrace new ideas.") },
    { icon: "users", title: L("Collaboration"), description: L("We work together to achieve more.") },
    { icon: "target", title: L("Impact Driven"), description: L("Every decision focuses on customer value.") }
  ],
  benefitsTitle: L("Benefits", "Avantages", "Beneficios", "Vorteile", "المزايا"),
  benefits: [
    { icon: "building", title: L("Remote-First"), description: L("Work from anywhere in the world.") },
    { icon: "award", title: L("Competitive Pay"), description: L("Industry-leading compensation.") },
    { icon: "zap", title: L("Growth Opportunities"), description: L("Learning budget and career development.") }
  ],
  positionsTitle: L("Open Positions", "Postes Ouverts", "Posiciones Abiertas", "Offene Stellen", "الوظائف المتاحة"),
  ctaTitle: L("Don't see a role for you?", "Vous ne voyez pas de poste?", "¿No ves un puesto para ti?", "Keine passende Stelle?", "لا ترى وظيفة مناسبة؟"),
  ctaSubtitle: L("Send us your resume anyway—we're always looking for talent.", "Envoyez-nous votre CV quand même.", "Envíenos su CV de todos modos.", "Senden Sie uns trotzdem Ihren Lebenslauf.", "أرسل لنا سيرتك الذاتية على أي حال.")
};

// ===================== PRICING PAGE =====================
const pricingPage = {
  _type: "pricingPage", _id: "pricingPage",
  heroBadge: L("Pricing"),
  heroTitle: L("Simple, Transparent Pricing"),
  heroSubtitle: L("Choose a plan that fits your business. No hidden fees."),
  plans: homePage.pricingPlans.map(p => ({ ...p, popular: p.isDark, ctaLink: "/get-started" })),
  comparisonTitle: L("Compare Plans", "Comparer les forfaits", "Comparar Planes", "Pläne vergleichen", "قارن الخطط"),
  comparisonSubtitle: L("See what each plan offers.", "Voyez ce que chaque forfait offre.", "Vea lo que ofrece cada plan.", "Sehen Sie, was jeder Plan bietet.", "شاهد ما يقدمه كل خطة."),
  faqBadge: L("FAQ"), faqTitle: L("Pricing FAQ"), faqSubtitle: L("Common pricing questions."),
  faqItems: [
    { question: L("Can I change plans anytime?"), answer: L("Yes, you can upgrade, downgrade, or cancel anytime.") },
    { question: L("Is there a free trial?"), answer: L("Yes, the Lite plan is free forever with core features.") },
    { question: L("What payment methods do you accept?"), answer: L("We accept all major credit cards and bank transfers.") }
  ],
  ctaTitle: L("Ready to get started?"), ctaSubtitle: L("Join thousands of businesses using Norxio."), ctaButton: { text: L("Get Started"), href: "/get-started", variant: "primary" }
};

// ===================== PRODUCT PAGES =====================
const multiCurrencyPage = { _type: "multiCurrencyPage", _id: "multiCurrencyPage", heroBadge: L("Multi-Currency"), heroTitle: L("One Account, Multiple Currencies"), heroSubtitle: L("Hold, receive, and manage 30+ currencies in one place."), heroPrimaryCta: { text: L("Get Started"), href: "/get-started", variant: "primary" }, stats: [{ value: "30+", label: L("Currencies") }, { value: "0.3%", label: L("FX from") }, { value: "24/7", label: L("Access") }], faqBadge: L("FAQ"), faqTitle: L("FAQ"), ctaTitle: L("Start today"), ctaSubtitle: L("Open your account.") };

const fxExchangePage = { _type: "fxExchangePage", _id: "fxExchangePage", heroBadge: L("FX Exchange"), heroTitle: L("Exchange Currencies Effortlessly"), heroSubtitle: L("Save on every transaction with real-time rates and low, transparent fees."), heroPrimaryCta: { text: L("Get Started"), href: "/get-started", variant: "primary" }, calculatorTitle: L("Business FX & Global Payouts"), sendLabel: L("You send"), receiveLabel: L("Beneficiary Receives"), feePercentage: 0.3, faqBadge: L("FAQ"), faqTitle: L("FX FAQ"), ctaTitle: L("Start exchanging"), ctaSubtitle: L("Get competitive rates.") };

const globalPayoutPage = { _type: "globalPayoutPage", _id: "globalPayoutPage", heroBadge: L("Global Payout"), heroTitle: L("Pay Anyone, Anywhere"), heroSubtitle: L("Fast, secure payouts to 190+ countries."), heroPrimaryCta: { text: L("Get Started"), href: "/get-started", variant: "primary" }, stats: [{ value: "190+", label: L("Countries") }, { value: "T+0", label: L("Settlement") }, { value: "50+", label: L("Currencies") }], faqBadge: L("FAQ"), faqTitle: L("Payout FAQ"), ctaTitle: L("Start sending"), ctaSubtitle: L("Open your account.") };

const corporateCardsPage = { _type: "corporateCardsPage", _id: "corporateCardsPage", heroBadge: L("Corporate Cards"), heroTitle: L("Smart Cards for Modern Teams"), heroSubtitle: L("Virtual and physical cards with real-time controls."), heroPrimaryCta: { text: L("Get Started"), href: "/get-started", variant: "primary" }, stats: [{ value: "Unlimited", label: L("Virtual cards") }, { value: "Real-time", label: L("Tracking") }, { value: "Instant", label: L("Creation") }], faqBadge: L("FAQ"), faqTitle: L("Cards FAQ"), ctaTitle: L("Get cards"), ctaSubtitle: L("Issue in minutes.") };

const apiIntegrationPage = { _type: "apiIntegrationPage", _id: "apiIntegrationPage", heroBadge: L("API"), heroTitle: L("Build Custom Payment Flows"), heroSubtitle: L("REST APIs for payments, FX, and payouts."), heroPrimaryCta: { text: L("Get API Keys"), href: "/get-started", variant: "primary" }, codeDemoTitle: L("Quick Integration"), codeSnippet: `const response = await fetch('https://api.norxio.com/v1/payouts', {\n  method: 'POST',\n  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },\n  body: JSON.stringify({ amount: 1000, currency: 'USD' })\n});`, codeLanguage: "javascript", faqBadge: L("FAQ"), faqTitle: L("API FAQ"), ctaTitle: L("Start building"), ctaSubtitle: L("Get API keys.") };

// ===================== REGULATORY REQUIREMENTS PAGE =====================
const regulatoryPage = {
  _type: "regulatoryPage", _id: "regulatoryPage",
  title: L(
    "Our Regulatory Requirement",
    "Nos Exigences Réglementaires",
    "Nuestros Requisitos Regulatorios",
    "Unsere Regulatorischen Anforderungen",
    "متطلباتنا التنظيمية"
  ),
  subtitle: L(
    "Norxio partners with regulated institutions for multi-currency accounts, FX, and global payouts.",
    "Norxio s'associe à des institutions réglementées pour les comptes multi-devises, le change et les paiements mondiaux.",
    "Norxio se asocia con instituciones reguladas para cuentas multidivisa, FX y pagos globales.",
    "Norxio arbeitet mit regulierten Institutionen für Multiwährungskonten, FX und globale Auszahlungen zusammen.",
    "تتعاون Norxio مع مؤسسات منظمة لحسابات متعددة العملات وصرف العملات والمدفوعات العالمية."
  ),
  regulations: [
    {
      country: L("United Kingdom", "Royaume-Uni", "Reino Unido", "Vereinigtes Königreich", "المملكة المتحدة"),
      description: L(
        "Norxio partners with a UK-authorised Electronic Money Institution regulated by the Financial Conduct Authority (FCA). All client funds are held in segregated safeguarding accounts at tier-1 UK banks, in full compliance with the Electronic Money Regulations 2011 and FCA client money rules.",
        "Norxio s'associe à un établissement de monnaie électronique agréé au Royaume-Uni et réglementé par la Financial Conduct Authority (FCA).",
        "Norxio se asocia con una Institución de Dinero Electrónico autorizada en el Reino Unido y regulada por la Financial Conduct Authority (FCA).",
        "Norxio arbeitet mit einer von der Financial Conduct Authority (FCA) regulierten britischen E-Geld-Institution zusammen.",
        "تتعاون Norxio مع مؤسسة نقود إلكترونية مرخصة في المملكة المتحدة وخاضعة لرقابة هيئة السلوك المالي (FCA)."
      )
    },
    {
      country: L("Germany", "Allemagne", "Alemania", "Deutschland", "ألمانيا"),
      description: L(
        "Through our regulated EU partner, an Electronic Money Institution licensed by BaFin (Federal Financial Supervisory Authority), Norxio provides services across the European Economic Area.",
        "Par l'intermédiaire de notre partenaire réglementé de l'UE, un établissement de monnaie électronique agréé par la BaFin, Norxio fournit des services dans tout l'Espace économique européen.",
        "A través de nuestro socio regulado de la UE, una Institución de Dinero Electrónico con licencia de BaFin, Norxio proporciona servicios en todo el Espacio Económico Europeo.",
        "Über unseren regulierten EU-Partner, eine von der BaFin lizenzierte E-Geld-Institution, bietet Norxio Dienstleistungen im gesamten Europäischen Wirtschaftsraum an.",
        "من خلال شريكنا المنظم في الاتحاد الأوروبي، وهو مؤسسة نقود إلكترونية مرخصة من BaFin، تقدم Norxio خدماتها في جميع أنحاء المنطقة الاقتصادية الأوروبية."
      )
    },
    {
      country: L("United Arab Emirates", "Émirats Arabes Unis", "Emiratos Árabes Unidos", "Vereinigte Arabische Emirate", "الإمارات العربية المتحدة"),
      description: L(
        "Norxio collaborates with a licensed payment service provider regulated by the Central Bank of the UAE.",
        "Norxio collabore avec un prestataire de services de paiement agréé et réglementé par la Banque centrale des Émirats arabes unis.",
        "Norxio colabora con un proveedor de servicios de pago con licencia regulado por el Banco Central de los EAU.",
        "Norxio arbeitet mit einem lizenzierten Zahlungsdienstleister zusammen, der von der Zentralbank der VAE reguliert wird.",
        "تتعاون Norxio مع مزود خدمات دفع مرخص وخاضع لرقابة المصرف المركزي الإماراتي."
      )
    },
    {
      country: L("United States", "États-Unis", "Estados Unidos", "Vereinigte Staaten", "الولايات المتحدة"),
      description: L(
        "Norxio works with licensed Money Services Businesses and partner banks regulated at both federal and state level in the US.",
        "Norxio travaille avec des entreprises de services monétaires agréées et des banques partenaires réglementées au niveau fédéral et étatique aux États-Unis.",
        "Norxio trabaja con Empresas de Servicios Monetarios con licencia y bancos asociados regulados a nivel federal y estatal en EE.UU.",
        "Norxio arbeitet mit lizenzierten Finanzdienstleistungsunternehmen und Partnerbanken zusammen, die auf Bundes- und Staatsebene in den USA reguliert werden.",
        "تعمل Norxio مع شركات خدمات مالية مرخصة وبنوك شريكة خاضعة للرقابة على المستوى الفيدرالي والولائي في الولايات المتحدة."
      )
    },
    {
      country: L("China", "Chine", "China", "China", "الصين"),
      description: L(
        "For CNY-related services, Norxio partners with licensed payment institutions authorised by the People's Bank of China (PBOC).",
        "Pour les services liés au CNY, Norxio s'associe à des établissements de paiement agréés par la Banque populaire de Chine (PBOC).",
        "Para servicios relacionados con CNY, Norxio se asocia con instituciones de pago autorizadas por el Banco Popular de China (PBOC).",
        "Für CNY-bezogene Dienstleistungen arbeitet Norxio mit lizenzierten Zahlungsinstituten zusammen, die von der People's Bank of China (PBOC) autorisiert sind.",
        "للخدمات المتعلقة باليوان الصيني، تتعاون Norxio مع مؤسسات دفع مرخصة من بنك الشعب الصيني (PBOC)."
      )
    }
  ]
};


// ===================== RUN SEED =====================
async function seedAll() {
  console.log("🚀 Seeding ALL pages with EXACT website content...\n");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const docs: Array<{ data: any; name: string }> = [
    { data: siteSettings, name: "Site Settings" },
    { data: homePage, name: "Home Page" },
    { data: aboutPage, name: "About Page" },
    { data: careersPage, name: "Careers Page" },
    { data: pricingPage, name: "Pricing Page" },
    { data: multiCurrencyPage, name: "Multi-Currency Page" },
    { data: fxExchangePage, name: "FX Exchange Page" },
    { data: globalPayoutPage, name: "Global Payout Page" },
    { data: corporateCardsPage, name: "Corporate Cards Page" },
    { data: apiIntegrationPage, name: "API Integration Page" },
    { data: regulatoryPage, name: "Regulatory Requirements Page" }
  ];
  for (const { data, name } of docs) {
    try { await client.createOrReplace(data); console.log(`✅ ${name}`); }
    catch (e) { console.error(`❌ ${name}:`, e); }
  }
  console.log("\n✨ Done! Visit /studio to review.");
}
seedAll().catch(console.error);


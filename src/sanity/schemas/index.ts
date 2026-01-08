// Export all schema types
export { supportedLanguages } from "./helpers";

// Site Settings & Global
export { siteSettings, blogPost, customerPage } from "./siteSettings";

// Static Pages
export { homePage, aboutPage, careersPage, pricingPage } from "./homePage";

// Product Pages
export {
  multiCurrencyPage,
  fxExchangePage,
  globalPayoutPage,
  corporateCardsPage,
  apiIntegrationPage,
  regulatoryPage
} from "./pages";

// Combined schema types array for Sanity config
import { siteSettings, blogPost, customerPage } from "./siteSettings";
import { homePage, aboutPage, careersPage, pricingPage } from "./homePage";
import {
  multiCurrencyPage,
  fxExchangePage,
  globalPayoutPage,
  corporateCardsPage,
  apiIntegrationPage,
  regulatoryPage
} from "./pages";

export const schemaTypes = [
  // Global Settings
  siteSettings,

  // Static Pages
  homePage,
  aboutPage,
  careersPage,
  pricingPage,

  // Product Pages
  multiCurrencyPage,
  fxExchangePage,
  globalPayoutPage,
  corporateCardsPage,
  apiIntegrationPage,
  regulatoryPage,

  // Content Types
  blogPost,
  customerPage,
];


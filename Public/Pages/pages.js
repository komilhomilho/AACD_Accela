import { loginHtml } from './pages/login/login.template.js';
import { homeHtml } from './pages/home/home.template.js';
import { faqHtml } from './pages/faq/faq.template.js';
import { redirectHtml } from './pages/redirect/redirect.template.js';

export const mapsPages = {
  "login": {
    "html": loginHtml,
    "js": "./pages/login/login.js"
  },
  "home": {
    "html": homeHtml,
    "js": "./pages/home/home.js"
  },
  "faq": {
    "html": faqHtml,
    "js": "./pages/faq/faq.js"
  },
  "favorites": {
    "html": "", 
    "js": "./pages/favorites/favorites.js"
  },
  "redirect": {
    "html": redirectHtml,
    "js": "./pages/redirect/redirect.js"
  }
};
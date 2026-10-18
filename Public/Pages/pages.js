import { loginHtml } from './login/login.template.js';
import { homeHtml } from './home/home.template.js';
import { faqHtml } from './faq/faq.template.js';
import { redirectHtml } from './redirect/redirect.template.js';

export const mapsPages = {
  "login": {
    "html": loginHtml,
    "js": "./login/login.js"
  },
  "home": {
    "html": homeHtml,
    "js": "/home/home.js"
  },
  "faq": {
    "html": faqHtml,
    "js": "./faq/faq.js"
  },
  "favorites": {
    "html": "", 
    "js": "./favorites/favorites.js"
  },
  "redirect": {
    "html": redirectHtml,
    "js": "./redirect/redirect.js"
  }
};
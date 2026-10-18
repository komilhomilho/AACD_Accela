import { faqHtml } from './faq/faq.template.js';
import { favoritesHtml } from './favorites/favorites.template.js';
import { globalSearchHtml } from './global_search/global_search.template.js';
import { homeHtml } from './home/home.template.js';
import { loginHtml } from './login/login.template.js';
import { redirectHtml } from './redirect/redirect.template.js';
import { specifyCategoryHtml } from './specify_category/transit/transit.template.js';
import { signUpHtml } from './sign_up/sign_up.template.js';

export const mapsPages = {
  "faq": {
    "html": faqHtml,
    "js": "./faq/faq.js"
  },
  "favorites": {
    "html": favoritesHtml,
    "js": "./favorites/favorites.js"
  },
  "global_search": {
    "html": globalSearchHtml,
    "js": "./global_search/global_search.js"
  },
  "home": {
    "html": homeHtml,
    "js": "./home/home.js"
  },
  "login": {
    "html": loginHtml,
    "js": "./login/login.js"
  },
  "redirect": {
    "html": redirectHtml,
    "js": "./redirect/redirect.js"
  },
  "specify_category": {
    "html": specifyCategoryHtml,
    "js": "./specify_category/specify_category.js"
  },
  "sign_up": {
    "html": signUpHtml,
    "js": "./sign_up/sign_up.js"
  }
};
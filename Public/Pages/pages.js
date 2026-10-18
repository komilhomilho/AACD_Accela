import { faqHtml } from './faq/faq.template.js';
import { favoritesHtml } from './favorites/favorites.template.js';
import { globalSearchHtml } from './global_search/global_search.template.js';
import { homeHtml } from './home/home.template.js';
import { loginHtml } from './login/login.template.js';
import { redirectHtml } from './redirect/redirect.template.js';
import { specifyCategoryTransitHtml } from './specify_category/transit/transit.template.js';
import { signUpHtml } from './sign_up/sign_up.template.js';
import { specifyCategoryGovDocHtml } from './specify_category/gov_doc/gov_doc.template.js'
import { specifyCategoryHealthHtml } from './specify_category/health/health.template.js'
import { specifyCategoryBenefitsHtml } from './specify_category/benefits/benefits.template.js'

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
  "transit": {
    "html": specifyCategoryTransitHtml,
    "js": "./specify_category/transit/transit.js"
  },
  "sign_up": {
    "html": signUpHtml,
    "js": "./sign_up/sign_up.js"
  },
  "gov_doc":{
    "html": specifyCategoryGovDocHtml,
    "js": "././specify_category/gov_doc/gov_doc.js"
  },
  "health":{
    "html": specifyCategoryHealthHtml,
    "js": "./specify_category/health/health.js"
  },
  "benefits":{
    "html": specifyCategoryBenefitsHtml,
    "js": "./specify_category/benefits/benefits.js"
  }
};
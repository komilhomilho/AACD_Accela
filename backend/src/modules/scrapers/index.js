import findLinksSPController from './services/findLinksSPController.js'
import findLinksGovController from './services/findLinksGovController.js'
import { wrapController} from '../utils/wrapper/linksWrapper.js'

export const findLinksSP = wrapController(findLinksSPController)
export const findLinksGov = wrapController(findLinksGovController)

import findLinksSPController from './rest/findLinksSPController.js'
import findLinksGovController from './rest/findLinksGovController.js'
import { wrapController} from '../utils/wrapper/restWrapper.js'

export const findLinksSP = wrapController(findLinksSPController)
export const findLinksGov = wrapController(findLinksGovController)

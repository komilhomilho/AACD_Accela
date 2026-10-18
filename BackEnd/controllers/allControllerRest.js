import findLinksController from './rest/findLinksController.js'
import { wrapController} from '../utils/wrapper/restWrapper.js'

export const findLinks = wrapController(findLinksController)

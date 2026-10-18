import findLinksController from './rest/findLinksController.js'
import { wrapController} from '../utils/wrapper/restWrapper.js'

export default {
    findLinks: wrapController(findLinksController)
}
import express from 'express'
import controlles from '../controllers/controllers.js'

const router = express.Router()

router.post('/pesquisarServico', controlles.findService)

export default router

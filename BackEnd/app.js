import 'dotenv/config'
import express from 'express'
import rotes from './Routes/Routers.js'
import path from 'path'
import { fileURLToPath } from 'url'
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import connectionDB from './DB/connection/connectionDB.js'

const log = console.log
const app = express()
const portweb = process.env.PORT_WEB
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const servicesMobileOffered = "./controller/allControllerMobile.js"
connectionDB();

app.use(express.json())
app.use('', rotes)

app.listen(portweb, () =>{
    log(`[REST] http://localhost:${portweb}`)
})

const portgrpc = process.env.PORT_GRPC
const packDefinitionUser = protoLoader.loadSync(path.join(__dirname, 'proto', 'mobile.proto'))
const mobileProto = grpc.loadPackageDefinition(packDefinitionUser).linkSync

const grpcServer = new grpc.Server()

grpcServer.addService(mobileProto.linksServices.service, {
    fetchUpdates: servicesMobileOffered.syncService,
    chkUpdates: servicesMobileOffered
})

grpcServer.bindAsync(`0.0.0.0:${portgrpc}`, grpc.ServerCredentials.createInsecure(), () => {
    log(`[grpc] Servidor gRPC rodando na porta ${portgrpc}`)
})


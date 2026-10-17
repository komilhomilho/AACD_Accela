import 'dotenv/config'
import express from 'express'
import rotes from './Routes/Routers.js'
import path from 'path'
import { fileURLToPath } from 'url'
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const log = console.log
const app = express()
const portweb = process.env.PORT_WEB
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const findServiceGrpc = "./controllersGrpc/controllerServicesGrpc.js"


app.use(express.json())
app.use('', rotes)

app.listen(portweb, () =>{
    log(`[REST] http://localhost:${portweb}`)
})

const portgrpc = process.env.PORT_GRPC
const packDefinitionUser = protoLoader.loadSync(path.join(__dirname, 'proto', 'mobile.proto'))
const mobileProto = grpc.loadPackageDefinition(packDefinitionUser).api

const grpcServer = new grpc.Server()

grpcServer.addService(mobileProto.ServicoDeServicos.service, {
    FindService: findServiceGrpc,
    ListarComprasDoUsuario: (call, callback) => {
        const userId = call.request.usuarioId
        callback(null, {listaDeCompras: ["note", "mouse"]})
    }
})

grpcServer.bindAsync(`0.0.0.0:${portgrpc}`, grpc.ServerCredentials.createInsecure(), () => {
    log(`[grpc] Servidor gRPC rodando na porta ${portgrpc}`)
})


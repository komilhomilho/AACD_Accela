import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import connectionDB from './DB/connection/connectionDB.js'
import servicesMobileOffered from './controllers/allControllerMobile.js';
import allJobs from './jobs/allJobs.js';
import allTools from './utils/tools/allTools.js';
import fs from 'fs'

const log = console.log
const app = express()
const portweb = process.env.PORT_WEB
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
connectionDB();

app.use(express.json())

app.listen(portweb, () => {
    log(`[REST] http://localhost:${portweb}`)
    allJobs.linksGov(__dirname, 'DB/jsons', 'data.json')
    allJobs.linksSP(__dirname, 'DB/jsons', 'data.json')
    //allJobs.startSearchLinksSp()
    //allJobs.startSearchLinksGov()
})

const portgrpc = process.env.PORT_GRPC
const packDefinitionUser = protoLoader.loadSync(path.join(__dirname, 'proto', 'mobile.proto'), {
    keepCase: true,
    longs: String, // <-- Garante que int64 seja carregado como String
    enums: String,
    defaults: true,
    oneofs: true
})
const mobileProto = grpc.loadPackageDefinition(packDefinitionUser).linkSync
const grpcServer = new grpc.Server()

grpcServer.addService(mobileProto.LinksService.service, {
    fetchUpdates: servicesMobileOffered.syncService,
    chkUpdates: servicesMobileOffered.chkUpdates
})

grpcServer.bindAsync(`0.0.0.0:${portgrpc}`, grpc.ServerCredentials.createInsecure(), () => {
    log(`[grpc] Servidor gRPC rodando na porta ${portgrpc}`)
})


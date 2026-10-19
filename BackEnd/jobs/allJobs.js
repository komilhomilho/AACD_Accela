import startSearchLinksSp from './linkSpScraperJob.js'
import startSearchLinksGov from './linkGovScraperJob.js'
import { promises as fs } from 'fs';
import path from 'path';
import allTools from '../utils/tools/allTools.js';
const log = console.log

const linksGov = async (__dirname, folder, nameArquive) => {
    try {
        log('[job] Starting capture links...')
        const data = await startSearchLinksGov()
        await allTools.addArquiveJSON(__dirname, path, fs, folder, nameArquive, data);
        log('[job] links captured and saved')
    }catch (err){
        console.error('[Job] Error the startSearchLinksGov: '+err)
    }
}

const linksSP = async (__dirname, folder, nameArquive) => {
    try {
        log('[job] Starting capture links...')
        const data = await startSearchLinksSp()
        await allTools.addArquiveJSON(__dirname, path, fs, folder, nameArquive, data);
        log('[job] links captured and saved')
    }catch (err){
        console.error('[Job] Error the startSearchLinksSp: '+err)
    }
}

export default {
    linksSP,
    linksGov
}
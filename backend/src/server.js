import 'dotenv/config';
import app from './app.js';
import connectionDB from './config/connectionDB.js';

const log = console.log;
const portweb = process.env.PORT_WEB || 3000;

connectionDB();

app.listen(portweb, () => {
    log(`[WEB] Servidor rodando em http://localhost:${portweb}`);

    //scrapersModule.linksGov(); 
    //scrapersModule.linksSP();
});
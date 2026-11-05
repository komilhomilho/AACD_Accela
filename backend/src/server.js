import 'dotenv/config';
import app from './app.js';
import connectionDB from './config/connectionDB.js';
import "./shared/utils/logger.js";

const portweb = process.env.PORT_WEB || 3000;

connectionDB();

app.listen(portweb, () => {
    console.log.blue(`[WEB] Servidor rodando em http://localhost:${portweb}`);

    //scrapersModule.linksGov(); 
    //scrapersModule.linksSP();
});
export default async function addArquiveJSON(__dirname, path, fs, __filePath, nameArquive, data) {
    const destinationFolder = path.join(__dirname, __filePath);
    const filePath = path.join(destinationFolder, nameArquive);
    
    try {
        // 1. Await adicionado aqui
        await fs.mkdir(destinationFolder, { recursive: true }); 
        
        let list = [];
        try {
            // 2. Nome alterado para evitar conflito com os dados que estão chegando
            const conteudoArquivo = await fs.readFile(filePath, 'utf8'); 
            list = JSON.parse(conteudoArquivo);
        } catch (err) {
            console.log('[tools] File not found, creating a new one...');
        }
        
        if (Array.isArray(data)) {
            list.push(...data);
        } else {
            list.push(data);
        }
        
        await fs.writeFile(filePath, JSON.stringify(list, null, 2)); 
        console.log('[tools] Item successfully added!');
        
    } catch (err) {
        console.error('[tools] error processing JSON file:', err);
    }
}
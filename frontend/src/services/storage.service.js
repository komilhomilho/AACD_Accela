const KEYS = {
    DATA: '@accela:data',
    LAST_SYNC: '@accela:last_sync',
    HISTORICO: 'historicoLinks' // Adicionei a chave do histórico aqui para ficar padronizado
};

function getLastSync() {
    const data = localStorage.getItem(KEYS.LAST_SYNC);
    return data ? Number(data) : 0;
}

function getLocalData() {
    const data = localStorage.getItem(KEYS.DATA);
    return data ? JSON.parse(data) : []; 
}

function saveNewData(newData) {
    console.log('[storage] trying to save');
    if (!newData || newData.length === 0) return;

    localStorage.setItem(KEYS.DATA, JSON.stringify(newData));
    localStorage.setItem(KEYS.LAST_SYNC, Date.now().toString());
}

function storageClickLink(titulo, url) {
    const historicoSalvo = localStorage.getItem(KEYS.HISTORICO);
    let arrayHistorico = historicoSalvo ? JSON.parse(historicoSalvo) : [];

    const novoRegistro = {
        titulo: titulo,
        url: url,
        dataAcesso: new Date().toISOString() 
    };

    arrayHistorico.unshift(novoRegistro);

    if (arrayHistorico.length > 50) {
        arrayHistorico.pop();
    }

    localStorage.setItem(KEYS.HISTORICO, JSON.stringify(arrayHistorico));
}

// NOVA FUNÇÃO: Para LER o histórico na tela de History
function getHistory() {
    const historicoSalvo = localStorage.getItem(KEYS.HISTORICO);
    return historicoSalvo ? JSON.parse(historicoSalvo) : [];
}

export default { getLastSync, getLocalData, saveNewData, storageClickLink, getHistory };
const KEYS = {
    DATA: '@accela:data',
    LAST_SYNC: '@accela:last_sync'
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
    console.log('[storage] trying to save')
    if (!newData || newData.length === 0) return;

    const oldData = getLocalData();

    const updatedData = [...oldData, ...newData];

    localStorage.setItem(KEYS.DATA, JSON.stringify(updatedData));

    localStorage.setItem(KEYS.LAST_SYNC, Date.now().toString());
}

export default { getLastSync, getLocalData, saveNewData };
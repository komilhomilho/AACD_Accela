// ant
import { switchPage } from '../app.js';

const gov_doc = document.getElementById('gov_doc')
gov_doc.addEventListener(('click'),()=>[
    switchPage("gov_doc")
])


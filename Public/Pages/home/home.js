// ant
import { switchPage } from '../app.js';

const gov_doc = document.getElementById('gov_doc')
gov_doc.addEventListener(('click'),()=>[
    switchPage("gov_doc")
])

const transit = document.getElementById('transit')
transit.addEventListener(('click'),()=>[
    switchPage("transit")
])

const benefits = document.getElementById('benefits')
benefits.addEventListener(('click'),()=>[
    switchPage("benefits")
])

const health = document.getElementById('health')
health.addEventListener(('click'),()=>[
    switchPage("health")
])


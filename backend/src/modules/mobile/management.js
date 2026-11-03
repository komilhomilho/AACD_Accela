import link from '../../DB/templates/links.js'
import linkSchema from '../../DB/templates/links.js'
// export default async function syncService(datePreviousUpdate){
//     const date = new Date(Number(datePreviousUpdate));
//     const response = await link.find()
//     .where('historicoAtualizacoes')
//     .gt(date)
//     .lean()
//     .exec()
//     console.log(response)
//     return response
// }

let links =[
    {
        nome: "Calendário de Vacinação",
        desc: "",
        URL: "https://www.gov.br/saude/pt-br/vacinacao/calendario",
        tags: ["vacinação", "informativo", "saúde"]
    },
    {
        nome: "Bilhete sptrans para pcds",
        desc: "",
        URL: "https://bilheteunico.sptrans.com.br/especial/pessoa-com-deficiencia/",
        tags: ["pcd", "transporte", "deficiência", "bilhete unico", "mobilidade"]
    },
    {
        nome: "solicitar Benefício Assistencial à Pessoas com Deficiência",
        desc: "",
        URL: "https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-com-deficiencia",
        tags: ["auxílio", "pcd", "deficiência", "assistência", "solicitação"]
    },
    {
        nome: "CadÚnico",
        desc: "",
        URL: "https://cadunico.dataprev.gov.br/#/programas-sociai",
        tags: ["cadastro", "auxílio", "baixa renda", "programa social"]
    },
    {
        nome: "Agendamento UBS",
        desc: "",
        URL: "https://agendafacil.prefeitura.sp.gov.br/saude",
        tags: ["saúde", "agendar"]
    }
]
export default async function carregarBanco(){
for (let link of links){
    const linkSalvar = new linkSchema ({name: link.nome, desc: link.desc, url: link.URL, tags: link.tags})
    await linkSalvar.save()
    }
}

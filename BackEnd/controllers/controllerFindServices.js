import servicos from '../services/servicesOffered.js'

export default async function findServicesController(req, res){
    try{
	const service = req.body
	if (!service || typeof service.pesquisa !== 'string'){
	    return res.status(400).json({
		erro: "Requisição Invalida, O campo 'pesquisa' e Obrigatorio No JSON."
	    })
	}
	const result = await servicos.findService(service)

	return res.status(200).json({
	    dados: result
	})
    }catch(err){
	return res.status(400).json({
	    erro: `Erro: ${err.message}`
	})
    }
}

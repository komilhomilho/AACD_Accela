import servicos from '../services/servicesOffered.js'; // Reaproveitando sua lógica exata!

export default async function buscarServicoGrpc(call, callback) {
    try {
        // call.request é o req.body do mobile
        const pesquisa = call.request.pesquisa;

        if (!pesquisa || typeof pesquisa !== 'string') {
            // No gRPC, você retorna erros no primeiro parâmetro do callback
            return callback({
                code: 3, // 3 no gRPC significa INVALID_ARGUMENT (equivalente ao status 400 do REST)
                details: "O campo 'pesquisa' é obrigatório."
            });
        }

        // Chama o SEU arquivo servicesOffered.js, que vai no MongoDB!
        const result = await servicos.findService({ pesquisa });

        // Retorna sucesso. Null para o erro, e o objeto para a resposta
        callback(null, {
             id: result._id.toString(), // Mongoose retorna ObjectId, o proto pede string
             nomeDoServico: result.nome,
             descricao: result.descricao
        });

    } catch (err) {
        callback({
            code: 13, // 13 = INTERNAL (Erro interno do servidor)
            details: `Erro: ${err.message}`
        });
    }
}
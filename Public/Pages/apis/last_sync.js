import axios from 'axios';

export default async function  last_sync(){
    try{
        const response = await axios.post(
            'http://localhost:50051/mobileProto.LinksService/chkUpdates',
            { 
                "last_sync": "0"
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        log('Grpc Resp: '+response.data)
    }catch (err){
        console.error(err)
    }
}
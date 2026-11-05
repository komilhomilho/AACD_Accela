import mongoose from 'mongoose'
import 'dotenv/config'

export default async function conectDB(){
    try{
	await mongoose.connect(process.env.MONGODB_URI)
	console.log.green('Conectado ao MongoDB')
    }catch (err){
	console.error(err)
	process.exit(1)
    }
}




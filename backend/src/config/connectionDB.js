import mongoose from 'mongoose'
import 'dotenv/config'

const log = console.log

export default async function conectDB(){
    try{
	await mongoose.connect(process.env.MONGODB_URI)
	log('Conectado ao MongoDB')
    }catch (err){
	console.error(err)
	process.exit(1)
    }
}





import mongoose from 'mongoose'
import 'dotenv/config'

const log = console.log

export default async function conectDB(){
    try{
	await mongoose.connect(process.env.MONGO_URL)
	log('Conectado ao MongoDB')
    }catch (err){
	console.error(err)
	process.exit(1)
    }
}




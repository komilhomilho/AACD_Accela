import mongoose from "mongoose";
const {Schema, model} = mongoose;

const linkSchema = new Schema({
    nome :{
        type: String,
        trim: true,
        required: [true, 'The link name is required.']
    },
    desc : {
        type: String,
        default: '',
        trim: true
    },
    url :{
        type: String, 
        required: [true, 'The URL is mandatory'],
        trim: true
    },
    tags: {
        type: [String],
        default: []
    },
    historicoAtualizacoes  :{
        type: Date,
        default: Date.now
    }
},
{ collection: 'link'})

linkSchema.index({tags: 1});
linkSchema.index({historicoAtualizacoes: 1});

const link = model('link', linkSchema)

export default link
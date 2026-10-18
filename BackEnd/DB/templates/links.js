import mongoose from "mongoose";
const {schema, model} = mongoose;

const linkSchema = new schema({
    nome :{
        type: string,
        trim: true,
        required: [true, 'The link name is required.']
    },
    desc : {
        type: string,
        default: '',
        trim: true
    },
    url :{
        type: string, 
        required: ['The URL is mandatory'],
        trim: true
    },
    historicoAtualizacoes  :{
        type: Date,
        default: Date.now
    }
})

linkSchema.index({tags: 1});
linkSchema.index({historicoAtualizacoes: 1});

const link = model('link', linkSchema)

export default link
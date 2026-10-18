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
        
    }
})
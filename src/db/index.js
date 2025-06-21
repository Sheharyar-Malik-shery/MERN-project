import mongoose from "mongoose"
import {DB_NAME} from "../constents/index.js"
const datebsae_connection = async()=>{
    try{
     let connected = await mongoose.connect(`${process.env.DATABASE_SRING}/${DB_NAME}`)
     console.log("dataBase connected Successfully", `HOST IS ${connected.connection.host}`)
    }catch(error){
     console.log(`Error While connecting DataBAse${error.message}`);
     throw error
    }
}
export  {datebsae_connection}
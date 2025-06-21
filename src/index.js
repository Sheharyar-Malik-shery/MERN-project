import 'dotenv/config'
import {datebsae_connection} from "./db/index.js"
import { app } from './app.js';
let port = process.env.PORT || 8000

datebsae_connection().then(()=>{
    app.listen(port ,()=> console.log(`App is lisning on port ${port}`)
    )
}).catch((err)=>{
    console.log(err);
})


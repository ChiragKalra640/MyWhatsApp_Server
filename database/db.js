// cloud.mongodb.com   mongoDb atlas

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () =>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qj7gulk.mongodb.net/?retryWrites=true&w=majority`

    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true});
        console.log("MongoDB Connected successfully...");
    }catch(error){
        console.log('Error while connecting with the database' , error.message);

    }
}
export default Connection;

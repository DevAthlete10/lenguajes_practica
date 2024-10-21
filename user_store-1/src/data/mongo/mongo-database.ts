import mongoose from 'mongoose';

interface OptionsMongo {
    mongoUrl:string;
    dbName:string;
}

export class MongoUserStoreDatabase {
    static async connect(options:OptionsMongo){
        const {mongoUrl,dbName} = options;
        try {
            await mongoose.connect( mongoUrl,{
                dbName:dbName,
            });
            console.log("Connect Mongo");
            return true;
        } catch (error) {
            console.log('Mongo connection error',error);
        }
    }  
    
    static async disconnect(){
        await mongoose.disconnect();
    }
}


import { envs } from "../../config";
import { CategoryModel, ProductModel, UserModel } from "../mongo/models";
import { MongoUserStoreDatabase } from "../mongo/mongo-database";
import { seedData } from "./data";

(async()=>{
    await MongoUserStoreDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB});

    await main();

    await MongoUserStoreDatabase.disconnect();

})();

const  randomBetween0AndX = (x:number) =>{
    return Math.floor(Math.random() * x);
}   

async function main() {
    
    await Promise.all([
        UserModel.deleteMany(),
        CategoryModel.deleteMany(),
        ProductModel.deleteMany()
    ])
    
    const users = await UserModel.insertMany(seedData.users);
    const categories = await CategoryModel.insertMany(
        seedData.categories.map( category => { 
            return{
                ...category,
                user:users[randomBetween0AndX(seedData.users.length -1)]._id
            };
    }));
    const product = await ProductModel.insertMany(
        seedData.products.map( product => { 
            return{
                ...product,
                user:users[randomBetween0AndX(seedData.users.length -1)]._id,               
                category:categories[randomBetween0AndX(seedData.categories.length -1 )]._id,
            };
    }
    ));
    
    console.log("SEEDED");
    
}
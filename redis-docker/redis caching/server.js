import express from "express";

import "dotenv/config";

import redisClient from "./src/config/redis.js";
import connectDB from "./src/config/db.js";
import Product from "./src/models/product.model.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Redis learning API",
  });
});

app.post("/products",async(req,res)=>{
    try {
        const {name,description,price} = req.body;
        const newProduct = await Product.create({
            name,
            description,
            price
        })
        res.json({
            message:"New product created"
        })
    } catch (error) {
        console.error(`Error in posting product`)
    }
})

app.get("/products",async(req,res)=>{
    try {
        const cachedProducts = await redisClient.get("products");
        if(cachedProducts){
            return res.json({
                message:"Cached Products from redis",
                products:JSON.parse(cachedProducts)
            })
        }
        const productFromDB = await Product.find();
        await redisClient.set(
            "products",
            JSON.stringify(productFromDB),
            "EX",
            30
        )
        res.json({
            message:"Products from Database",
            products:productFromDB
        })
    } catch (error) {
        console.error(`Error in getting products`);
    }
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port http://localhost:${PORT}`);
  });
});

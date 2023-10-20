import express from 'express'
import cors from 'cors'
import { Produtos } from './produtos.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.post("/novo", (req,res)=>{
    const { id, descricao, preco } = req.body; // Desconstrução
    const produto = Produtos(id, descricao, preco);
    return res.status(200).json(produto) // $ e {} usar `` (literal string)
})

app.listen(3000,()=>{
    console.log("Running")
})
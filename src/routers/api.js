const express = require ("express");
const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) =>{
    res.status(200).send("<h1>API-CHAT</h1>")
}));

app.use('/sobre', router.get('/sobre', (req, res, next) =>{
    res.status(200).send({
        "nome" : "API-CHAT",
        "version" : "1.0.0",
        "autor" : "Isadora"
    })
})); 

app.use("/salas", router.get("/salas", (req, res, next) =>{
    const salaController = require("../controller/salaController");
    const resp = salaController.get();
    res.status(200).send(resp);
}));

app.use('/', router.get('/salas', async (req, res) => {
    const salaController = require('./controller/salaController');
    const resp = await salaController.get();
    res.status(200).send(resp);
}));

module.exports=app; 

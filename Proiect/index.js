import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Aliment from './entities/Aliment.js';
import Prieten from './entities/Prieten.js';
import Comanda from './entities/Comanda.js';

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


 //CREATE
 async function createAliment(aliment){
    return await Aliment.create(aliment);
}

async function createPrieten(prieten){
  return await Prieten.create(prieten);
}

 async function createComanda(comanda){
    return await Comanda.create(comanda);
 }

//GET
async function getAliment(){
  return await Aliment.findAll();
}
async function getAlimentById(id){
  return await Aliment.findByPk(id);
}

async function getPrieten(){
  return await Prieten.findAll();
}
async function getPrietenById(id){
  return await Prieten.findByPk(id);
}

async function getComanda(){
  return await Comanda.findAll();
}
async function getComandaById(id){
  return await Comanda.findByPk(id);
}

//UPDATE
async function updateAliment(id, aliment){
  if (parseInt(id) !== aliment.AlimentId){
      console.log("Entity id diff");
      return;
  }

  let updateEntity = await getAlimentById(id);

  if (!updateEntity){
      console.log("There isn't a aliment with this id");
      return;
  }

  return await updateEntity.update(aliment);
}

async function updatePrieten(id, prieten){
  if (parseInt(id) !== prieten.PrietenId){
      console.log("Entity id diff");
      return;
  }

  let updateEntity = await getPrietenById(id);

  if (!updateEntity){
      console.log("There isn't a prieten with this id");
      return;
  }

  return await updateEntity.update(prieten);
}

async function updateComanda(id, comanda){
  if (parseInt(id) !== comanda.ComandaId){
      console.log("Entity id diff");
      return;
  }

  let updateEntity = await getComandaById(id);

  if (!updateEntity){
      console.log("There isn't a comanda with this id");
      return;
  }

  return await updateEntity.update(comanda);
}

//DELETE
async function deleteAliment(id){
  let deleteEntity = await getAlimentById(id);

  if (!deleteEntity){
      console.log("There isn't a aliment with this id");
      return;
  }

  return await deleteEntity.destroy();
}

async function deletePrieten(id){
  let deleteEntity = await getPrietenById(id);

  if (!deleteEntity){
      console.log("There isn't a prieten with this id");
      return;
  }

  return await deleteEntity.destroy();
}

async function deleteComanda(id){
  let deleteEntity = await getComandaById(id);

  if (!deleteEntity){
      console.log("There isn't a comanda with this id");
      return;
  }

  return await deleteEntity.destroy();
}

//ROUTES
//ALIMENT ROUTES
router.route('/aliment').get( async (req, res) => {
  res.json(await getAliment());
})
router.route('/aliment').post( async (req, res) => {
    res.json(await createAliment(req.body));
  })
  router.route('/aliment/:id').get( async (req, res) => {
    res.json(await getAlimentById(req.params.id));
})
router.route('/aliment/:id').put( async (req, res) => {
  res.json(await updateAliment(req.params.id, req.body));
})
router.route('/aliment/:id').delete( async (req, res) => {
  res.json(await deleteAliment(req.params.id));
})

//PRIETEN ROUTES
router.route('/prieten').get( async (req, res) => {
  res.json(await getPrieten());
})
router.route('/prieten').post( async (req, res) => {
    res.json(await createPrieten(req.body));
  })
  router.route('/prieten/:id').get( async (req, res) => {
    res.json(await getPrietenById(req.params.id));
})
router.route('/prieten/:id').put( async (req, res) => {
  res.json(await updatePrieten(req.params.id, req.body));
})
router.route('/prieten/:id').delete( async (req, res) => {
  res.json(await deletePrieten(req.params.id));
})

//COMANDA ROUTES
router.route('/comanda').get( async (req, res) => {
  res.json(await getComanda());
})
router.route('/comanda').post( async (req, res) => {
    res.json(await createComanda(req.body));
  })
  router.route('/comanda/:id').get( async (req, res) => {
    res.json(await getComandaById(req.params.id));
})
router.route('/comanda/:id').put( async (req, res) => {
  res.json(await updateComanda(req.params.id, req.body));
})
router.route('/comanda/:id').delete( async (req, res) => {
  res.json(await deleteComanda(req.params.id));
})

let port = process.env.PORT || 8000;
app.listen(port);
console.log('API is runnning at ' + port);

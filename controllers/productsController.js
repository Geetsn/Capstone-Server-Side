const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports.index = (_req, res) => {
  knex('products')
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => res.status(400).send(`Error retrieving Products: ${err}`))
}

module.exports.addProducts = (req, res) => {
  
  // if ( !req.body.product_name || !req.body.product_image || !req.body.description || !req.body.category || !req.body.color || !req.body.size || !req.body.quantity || !req.body.price)
  // {return req.status(400).send('aaa')}
  knex('products')
  .insert({ id: uuid(), ...req.body})
  .then((data) => {
    res.status(201).send({message: 'added products'})
    console.log(data)
  })
  .catch((err)=>{
    res.status(500).send(err)
  })
};

module.exports.getProducts = (req, res) => {
  knex('products')
  .where({id : req.params.productid})
  .then((data)=> {
    res.status(200).json(data)
  })
  .catch((error)=>{
    res.status(400).send(`err: ${error}`)
  })
}

exports.delProduct = (req, res) => {
  //
  knex('products')
      .where ("id",  req.params.productid)
      .delete()
      .then(()=> {
          res.status(200).send(`Product #${req.params.productid} was deleted.`)
      })
      .catch((err)=> {
          res.status(500).send(`Failed to delete product with id${req.params.productid}`)
      })
}

module.exports.updateProduct = (req, res) => {
  inputData = {
    ...req.body
  }
  knex('products')
  .where({id : req.params.productid})
  .update(inputData)
  .then(() => {
    res.status(200).send(`user #${req.params.productid} was updated`)
  })
  .catch(err => {
    res.status(500).send(`user #${req.params.productid} could not be updated: ${err}`);
  })
}
const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports.index = (_req, res) => {
  knex('order_product')
  .then((data)=> {
    res.status(200).json(data);
  })
  .catch((err) => res.status(400).send(`Error retrieving Product: ${err}`))
}

module.exports.addOrderProduct = (req, res) => {
  inputData = {
    ...req.body, id: uuid()
  }
  if (!req.body.order_id  || !req.body.product_id || !req.body.product_qty || !req.body.product_price){return res.status(400).send(`aaa`)}
  knex('order_product')
  .insert(inputData)
  .then((data)=> {
    res.status(201).json(inputData)
  })
  .catch((err)=>{
    res.status(500).send(`bbb ${err}`)
  })
};

module.exports.getOrderProduct = (req, res) => {
  knex('order_product')
  .where({id : req.params.orderproductid})
  .then((data)=> {
    res.status(200).json(data)
  })
  .catch((error)=>{
    res.status(400).send(`err: ${error}`)
  })
}

module.exports.updateOrderProduct = (req, res) => {
  inputData = {
    ...req.body, updated_at: knex.fn.now()
  }
  knex('order_product')
  .where({id : req.params.orderproductid})
  .update(inputData)
  .then(() => {
    res.status(200).send(`user #${req.params.orderProductid} was updated`)
  })
  .catch(err => {
    res.status(500).send(`user #${req.params.orderProductid} could not be updated: ${err}`);
  })

}

exports.delOrderProduct = (req, res) => {
  //
  knex('order_product')
      .where ("id",  req.params.orderproductid)
      .delete()
      .then(()=> {
          res.status(200).send(`Order #${req.params.orderProductid} was deleted.`)
      })
      .catch((err)=> {
          res.status(500).send(`Failed to delete order with id${req.params.orderproductid}`)
      })
}
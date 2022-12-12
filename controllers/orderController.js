const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports.index = (_req, res) => {
  knex('order')
  .then((data)=> {
    res.status(200).json(data);
  })
  .catch((err) => res.status(400).send(`Error retrieving Order: ${err}`))
}

module.exports.addOrder = (req, res) => {
  inputData = {
    ...req.body, id: uuid()
  }
  if (!req.body.user_id )
  {return res.status(400).send(`aaa`)}
  knex('order')
  .insert(inputData)
  .then((data)=> {
    res.status(201).json(inputData)
  })
  .catch((err)=>{
    res.status(500).send(`bbb ${err}`)
  })
};

module.exports.getOrder = (req, res) => {
  knex('order')
  .where({id : req.params.orderid})
  .then((data)=> {
    res.status(200).json(data)
  })
  .catch((error)=>{
    res.status(400).send(`err: ${error}`)
  })
}

module.exports.updateOrder = (req, res) => {
  inputData = {
    ...req.body, updated_at: knex.fn.now()
  }
  knex('order')
  .where({id : req.params.orderid})
  .update(inputData)
  .then(() => {
    res.status(200).send(`user #${req.params.orderid} was updated`)
  })
  .catch(err => {
    res.status(500).send(`user #${req.params.orderid} could not be updated: ${err}`);
  })

}

exports.delOrder = (req, res) => {
  //
  knex('order')
      .where ("id",  req.params.orderid)
      .delete()
      .then(()=> {
          res.status(200).send(`Order #${req.params.orderid} was deleted.`)
      })
      .catch((err)=> {
          res.status(500).send(`Failed to delete order with id${req.params.orderid}`)
      })
}
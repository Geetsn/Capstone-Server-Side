const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports.index = (_req, res) => {
  knex('payment')
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => res.status(400).send(`Error retrieving Payment: ${err}`))
}

module.exports.addPayment = (req, res) => {
  inputData = {
    ...req.body, id: uuid()
  }
  if (!req.body.user_id || !req.body.card_name || !req.body.expiration_date || !req.body.cvc || !req.body.payment_date || !req.body.amount )
  {return req.status(400).send('aaa')}
  knex('payment')
  .insert(inputData)
  .then((data) => {
    res.status(201).json(inputData)
  })
  .catch((err)=>{
    res.status(500).send('err')
  })
};

module.exports.getPayment = (req, res) => {
  knex('payment')
  .where({id : req.params.paymentid})
  .then((data)=> {
    res.status(200).json(data)
  })
  .catch((error)=>{
    res.status(400).send(`err: ${error}`)
  })
}

exports.delPayment = (req, res) => {
  //
  knex('payment')
      .where ("id",  req.params.paymentid)
      .delete()
      .then(()=> {
          res.status(200).send(`Payment #${req.params.paymentid} was deleted.`)
      })
      .catch((err)=> {
          res.status(500).send(`Failed to delete product with id${req.params.paymentid}`)
      })
}

module.exports.updatePayment = (req, res) => {
  inputData = {
    ...req.body, updated_at: knex.fn.now()
  }
  knex('payment')
  .where({id : req.params.paymentid})
  .update(inputData)
  .then(() => {
    res.status(200).send(`user #${req.params.paymentid} was updated`)
  })
  .catch(err => {
    res.status(500).send(`user #${req.params.paymentid} could not be updated: ${err}`);
  })
}
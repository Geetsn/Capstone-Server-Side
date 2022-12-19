const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

module.exports.index = (_req, res) => {
  knex('user')
  .then((data)=> {
    res.status(200).json(data);
  })
  .catch((err) => res.status(400).send(`Error retrieving User: ${err}`))
}

module.exports.addUser = (req, res) => {
  inputData = {
    ...req.body, id: uuid()
  }
  if (!req.body.name || !req.body.last_name || !req.body.email || !req.body.password || req.body.is_admin)
  {return res.status(400).send(`user added`)}
  knex('user')
  .insert(inputData)
  .then((data)=> {
    res.status(201).json(inputData)
  })
  .catch((err)=>{
    res.status(500).send(`bbb ${req.body.user.is_admin} ${err}`)
  })
};

module.exports.getUser = (req, res) => {
  knex('user')
  .where({id : req.params.userid})
  .then((data)=> {
    res.status(200).json(data)
  })
  .catch((error)=>{
    res.status(400).send(`err: ${error}`)
  })
}

module.exports.updateUser = (req, res) => {
  inputData = {
    ...req.body
  }
  knex('user')
  .where({id : req.params.userid})
  .update(inputData)
  .then(() => {
    res.status(200).send(`user #${req.params.userid} was updated`)
  })
  .catch(err => {
    res.status(400).send(`user #${req.params.userid} could not be updated: ${err}`);
  })

}

const { v4: uuidv4 } = require('uuid')
let birds = require('../Birds')

const getBirds = (request, reply) => {
  reply.send(birds)
}

const getBird = (request, reply) => {
  const { id } = request.params

  const bird = birds.find((bird) => bird.id === id)

  reply.send(bird)
}

const addBird = (request, reply) => {
  const {name} = request.body
  const item = {
    id: uuidv4(),
    name
  }

  birds = [...birds, item]

  reply.code(201).send(item)
}

const deleteBird = (request, reply) => {
  const {id} = request.params

  birds = birds.filter(item => item.id !== id)

  reply.send({message: `Bird ${id} has been removed`})
}

const updateBird = (request, reply) => {
  const {id} = request.params
  const {name} = request.body

  birds = birds.map((item) => (item.id === id ? {id, name} : item))

  bird = birds.find((item) => item.id === id)

  reply.send(bird)
}

module.exports = {
  getBirds,
  getBird,
  addBird,
  deleteBird,
  updateBird
}

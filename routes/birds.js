const birds = require('../Birds')

const {getBirds, getBird, addBird, deleteBird, updateBird} = require('../controllers/bird_controllers')

// Bird schema
const Bird = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' }
  }
}

// Options for get all birds
const getBirdsOpt = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          Bird
        }
      }
    }
  },
  handler: getBirds
  }


// Options for get one bird
const getBirdOpts = {
  schema: {
    response: {
      200: Bird,
      }
    },
    handler: getBird
  }

const postBirdOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string'}
      }
    },
    response: {
      201: Bird
      }
    },
    handler: addBird
  }

  const deleteBirdOpts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string'}
          }
        }
      }
    },
    handler: deleteBird
  }

  const updateBirdOpts = {
    schema: {
      response: {
        200: Bird
        }
      },
      handler: updateBird
    }


function birdRoutes (fastify, options, done) {
  // Get all birds
  fastify.get('/Birds', getBirdsOpt)
  // Get one bird
  fastify.get('/Birds/:id', getBirdOpts)
  // Add bird
  fastify.post('/Birds', postBirdOpts)
  // Delete bird
  fastify.delete('/Birds/:id', deleteBirdOpts)
  // Update Bird
  fastify.put('/Birds/:id', updateBirdOpts)

  done()
}

module.exports = birdRoutes

const fastify = require('fastify')({ logger: true })
const PORT = 5000
const birds = require('./birds')

// Declare a route
fastify.get('/birds', (request, reply) => {
  reply.send(birds)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
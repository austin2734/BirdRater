const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes/birds'))

fastify.register(require('@fastify/swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'fastify-api',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    }
  }
})

const PORT = 5000

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

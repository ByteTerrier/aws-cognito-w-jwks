import fastify from 'fastify'
import { routes } from './http/_routes'

export const app = fastify()

app.register(routes)
app.setErrorHandler((error, _, reply) => {
  console.error(error)
  return reply.status(500).send({ message: 'Internal server error.' })
})

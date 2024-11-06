import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate.controller'
import { verifyJWT } from './verify-jwt.controller'

export async function routes(app: FastifyInstance) {
  app.post('/authenticate', authenticate)
  app.get('/verify-jwt', verifyJWT)
}

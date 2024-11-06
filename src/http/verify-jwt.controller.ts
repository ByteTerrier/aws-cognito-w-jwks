import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { validateTokenSignature, JWKSValidationError } from '../lib/jwks'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authorizationHeaderSchema = z.object({
    authorization: z.string(),
  })

  const { authorization } = authorizationHeaderSchema.parse(request.headers)
  const token = authorization.replace(/^Bearer\s+/i, '')

  try {
    await validateTokenSignature(token)
    return reply.status(200).send({
      message: 'OK',
    })
  } catch (err) {
    if (err instanceof JWKSValidationError) {
      return reply.status(401).send({
        message: 'Unauthorized.',
      })
    }

    throw err
  }
}

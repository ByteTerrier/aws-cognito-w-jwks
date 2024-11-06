import { getJwtToken } from '../lib/cognito'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    username: z.string().min(1),
    password: z.string().min(6),
  })

  const { username, password } = authenticateBodySchema.parse(request.body)
  const token = await getJwtToken(username, password)

  if (!token) {
    return reply.status(401).send({
      message: 'Invalid credentials.',
    })
  }

  return reply.status(201).send({
    token,
  })
}

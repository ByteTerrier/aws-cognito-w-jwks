import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

const JWKS_URI = process.env.JWKS_URI || ''

export class JWKSValidationError extends Error {
  constructor() {
    super('JWKSValidationError')
  }
}

/**
 * Validate the signature of a JWT Token against the JWKS URI
 * @param {string} token - The JWT Token to verify
 * @returns {Promise<void>} - Promise that resolves if the token is valid
 */
export async function validateTokenSignature(token: string): Promise<void> {
  const client = jwksClient({
    jwksUri: JWKS_URI,
  })

  const header = jwt.decode(token, {
    complete: true,
  })?.header
  if (!header) throw new JWKSValidationError()

  const signingKey = await client.getSigningKey(header.kid)
  if (!signingKey) throw new JWKSValidationError()

  await new Promise((resolve, reject) => {
    jwt.verify(
      token,
      signingKey.getPublicKey(),
      { algorithms: ['RS256'] },
      (err, decoded) => {
        if (err) reject(err)
        resolve(decoded)
      },
    )
  })
}

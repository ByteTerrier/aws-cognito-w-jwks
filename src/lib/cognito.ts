import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
} from '@aws-sdk/client-cognito-identity-provider'

const AWS_REGION = process.env.AWS_REGION || 'us-east-1'
const COGNITO_CLIENT_ID = process.env.COGNITO_CLIENT_ID || ''

const cognitoClient = new CognitoIdentityProviderClient({
  region: AWS_REGION,
})

/**
 * Get a JWT token from Cognito using the USER_PASSWORD_AUTH flow
 * @param {string} username - The login credential of the user
 * @param {string} password - The password credential of the user
 * @returns {Promise<string | undefined>} - The JWT Token
 */
export async function getJwtToken(
  username: string,
  password: string,
): Promise<string | undefined> {
  const params: InitiateAuthCommandInput = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: COGNITO_CLIENT_ID,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  }

  const command = new InitiateAuthCommand(params)
  const response = await cognitoClient.send(command)

  return response.AuthenticationResult?.IdToken
}

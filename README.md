# AWS Cognito Integration with TypeScript

This repository demonstrates how to integrate AWS Cognito with a TypeScript application using the AWS SDK. It covers authentication and token validation, providing a practical example based on the ["OAuth2, JWT, and JWKS using Amazon Cognito as IdP"](https://dev.to/vynnux/oauth2-jwt-and-jwks-using-amazon-cognito-as-idp-1jod) article.

## Features

- Sign in using AWS Cognito.
- Fetch and validate JWT tokens.
- Use JWKS for secure token verification.

## Prerequisites

Before using this demo, ensure you have the following:

- **Node.js** (version 14 or higher).
- **npm** or **yarn** for package management.
- An AWS account with Cognito configured.
  - A User Pool created in AWS Cognito.
  - App Client ID and Secret.
  - Domain name configured for the Cognito User Pool.

## Setup

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Install Dependencies

Run the following command to install required packages:

```bash
npm install
# or
yarn install
```

### Configure Environment Variables

Create a `.env` file in the root of the project and add the following values:

```env
AWS_REGION=<your-aws-region>
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-app-client-id>
COGNITO_CLIENT_SECRET=<your-app-client-secret>
COGNITO_DOMAIN=<your-cognito-domain>
```

Replace the placeholders with your AWS Cognito configuration values.

## Usage

### Start the Application

Run the following command to start the demo:

```bash
npm start
# or
yarn start
```

### Example Endpoints

1. **Sign In**: Authenticate a user and retrieve JWT tokens.
2. **Token Validation**: Validate JWT tokens using the Cognito JWKS.

Refer to the source code for detailed implementation.

## Related Resources

For a detailed explanation of the concepts and implementation, check out the article on [Dev.to](https://dev.to/vynnux/oauth2-jwt-and-jwks-using-amazon-cognito-as-idp-1jod).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

# AWS Template

This is a template project that provides configuration and template codes for an AWS backend project written in Typescript. It can be used to create a monorepo for the entire backend system of an app or a microservice within a larger system.

## Features

The template project includes the following features:

### Requirements

- Node.js
- AWS CLI
- AWS configuration and credentials

### Build

The project is written in Typescript and can be built using the command `npm run build`. This will compile the Typescript code to Javascript.

### Linting

The project is configured to use ESLint for code linting. Use the command `npm run lint` to lint the code.

### Unit Testing

The project utilizes Jest for running unit tests. Use the command `npm run test` to execute the unit tests. Dynalite is used to run a local DynamoDB instance for testing.

### Integration Testing

Jest is also used for running integration tests. Use the command `npm run test:integration` to run the integration tests. The tests will utilize the local AWS configuration in `~/.aws/config` and `~/.aws/credentials` to connect to the AWS services.

### Deployment

CloudFormation is used for deploying the AWS resources. To deploy the resources, follow these steps:

1. In a new AWS account, run `npm run deploy:bootstrap` to create the S3 bucket for deployment.

2. Run `npm run deploy` to deploy the resources.

### GraphQL Definition and Implementation Using AppSync

The template includes a GraphQL schema defined in `appsync/schema.sdl`. It also utilizes the CloudFormation template `cloudformation/appsync.yaml` to deploy the schema, resolvers, and data sources to AWS.

### API Gateway

An implementation of HTTP API using API Gateway is included.

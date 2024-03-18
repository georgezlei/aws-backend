# aws-backend

This is a template project included configuration and template codes of an AWS backend project in Typescript.

The following features are included:

## Build from Typescript to Javascript

The project is written in Typescript. The build process is configured to compile the Typescript code to Javascript.
Use command `npm run build` to build the project.

## Lint

The project is configured to use ESLint to lint the code. Use command `npm run lint` to lint the code.

## Unit Test

The project is configured to use Jest to run unit tests. Use command `npm run test` to run the unit tests.

Dynalite is used to run a local DynamoDB instance for testing.

## Integration Test

The project is configured to use Jest to run integration tests. Use command `npm run test:integration` to run the integration tests.

It will use the local AWS configuration in `~/.aws/config` and `~/.aws/credentials` to connect to the AWS services.

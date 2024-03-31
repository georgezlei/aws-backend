# AWS Backend Template with TypeScript

Welcome to a sophisticated template designed to streamline the creation and deployment of backend systems on AWS using TypeScript. This meticulously crafted template serves as a cornerstone for developing a unified monorepo for your application's backend infrastructure or integrating a microservice into an extensive ecosystem.

## Elevating Your Backend with Rich Features

Embark on a journey with a template enriched with cutting-edge features tailored for robust backend development:

### Prerequisites

Before you dive in, ensure you're equipped with:

- Node.js - The runtime environment for executing JavaScript code server-side.
- AWS CLI - Your command-line companion for AWS services management.
- AWS Configuration and Credentials - Essential for authenticating and authorising your interactions with AWS services.

### Building Your Vision

Leveraging TypeScript, this project transforms your code from TypeScript to JavaScript seamlessly. Initiate the build process with `npm run build` and watch your TypeScript code evolve.

### Code Excellence through Linting

Maintain high code quality and consistency with ESLint integration. Execute `npm run lint` to scrutinise your code for potential improvements.

### Unit Testing with Jest

Empower your development with Jest for unit testing, ensuring each component performs as expected. Dynalite facilitates a simulated DynamoDB environment for comprehensive testing. Trigger your unit tests with `npm run test`.

### Integration Testing: Beyond the Unit

Extend testing to integration levels with Jest, utilising local AWS configurations for a seamless test execution environment. Launch your integration tests with `npm run test:integration`.

### Seamless Deployment with CloudFormation

Deploy your AWS resources effortlessly:

1. Initialise with `npm run deploy:bootstrap` to create the necessary S3 bucket in a new AWS account.
2. Execute `npm run deploy` to unfold your resources into the AWS ecosystem.

### GraphQL: Schema to Solution

Incorporate GraphQL into your project with an outlined schema in `appsync/schema.sdl` and a CloudFormation blueprint in `cloudformation/appsync.yaml` for deploying schema, resolvers, and data sources efficiently.

### API Gateway Integration

Explore the realms of HTTP APIs with API Gateway, facilitated by an example in `src/functions/apigateway-handler` and the `cloudformation/api-gateway.yaml` for a comprehensive CloudFormation setup.

Dive into this template to elevate your AWS backend development, harnessing the power of TypeScript, CloudFormation, and more, to create scalable, high-quality backend systems.

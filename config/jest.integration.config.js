const config = require("./jest.config");

const currentWorkingDirectory = process.cwd();

module.exports = {
  ...config,
  testMatch: [
    `**/__tests__/integration/**/*.[jt]s?(x)`,
    `!**/test-fixtures/**`,
    `!**/steps/*.[jt]s?(x)`,
  ],
  collectCoverage: false,
  // setupFiles: [`${currentWorkingDirectory}/testSetup/setIntegrationEnvVars.js`],
  // setupFilesAfterEnv: [`${currentWorkingDirectory}/testSetup/setTestLogs.js`],
  testTimeout: 10000,
  roots: [`${currentWorkingDirectory}/src`],
};

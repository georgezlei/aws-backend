const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const currentWorkingDirectory = process.cwd();
const currentPackageName = path.basename(currentWorkingDirectory);
const outputDirectoryPath = `<rootDir>/../test-results/${currentPackageName}`;

const config = {
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: outputDirectoryPath,
        outputName: "junit.xml",
      },
    ],
  ],
  coverageReporters: ["clover", "html", "json", "lcov", "cobertura", "text"],
  collectCoverage: true,
  collectCoverageFrom: [`**/functions/**/*.[jt]s?(x)`, `!**/__tests__/**/*`],
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      branches: 80,
      statements: 80,
    },
  },
  coverageDirectory: `${outputDirectoryPath}/coverage`,
  preset: "jest-dynalite",
  // setupFiles: [`${currentWorkingDirectory}/testSetup/setEnvVars.js`],
  // setupFilesAfterEnv: [`${currentWorkingDirectory}/testSetup/setTestLogs.js`],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/__tests__/unit/**/*.[jt]s?(x)", "!**/test-fixtures/**"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  roots: [`${currentWorkingDirectory}/src`],
};

module.exports = config;

module.exports = {
    verbose: true,
    displayName: 'root-test',
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    setupFiles: ['<rootDir>/tests/setup.ts'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**']
  };
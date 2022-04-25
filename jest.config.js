/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  setupFilesAfterEnv: ['./jest.setupAfterEnv.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^features/(.*)$': '<rootDir>/src/features/$1'
  },
  testPathIgnorePatterns: ['index.ts'],
  collectCoverageFrom: ['src/features/**/*.ts', 'src/features/**/*.tsx'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};

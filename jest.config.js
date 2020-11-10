module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
<<<<<<< HEAD
=======
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
>>>>>>> 8aea7cee29b9d90b6a5ac1c88c2758bc557c37d6
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}

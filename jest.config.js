const project = require('./project.json');

module.exports = {
  collectCoverageFrom: project.source.tests.files,
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@vue$': 'vue/dist/vue.esm-bundler.js',
    '@src\/(.*)$': `<rootDir>/${project.source.root}/$1`,
    '@environment$': `<rootDir>/${project.source.environments.root}/development.js`
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': 'html-loader-jest',
    '^.+\\.(css|styl|png|jpe?g|gif|svg)$': '<rootDir>/src/base/mocks/raw-files.js',
  }
};

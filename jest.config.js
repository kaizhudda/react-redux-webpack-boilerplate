module.exports = {
  setupFiles: [
    '<rootDir>/setupTests.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
};

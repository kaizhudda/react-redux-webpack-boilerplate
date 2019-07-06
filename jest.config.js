module.exports = {
  setupFiles: [
    '<rootDir>/setupTest.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
};

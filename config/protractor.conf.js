exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['../test/e2e/**/*.spec.js'],
  useAllAngular2AppRoots: true
};

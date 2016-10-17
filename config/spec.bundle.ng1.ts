import 'angular';
import 'angular-mocks/angular-mocks';
import 'bootstrap-app';

var testsContext = require.context('../test/ng1', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);

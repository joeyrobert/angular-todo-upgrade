import 'angular';
import 'angular-mocks/angular-mocks';
import 'bootstrap-app';

var testsContext = require.context('./test', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);

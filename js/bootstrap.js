require('node_modules/angular/angular.js');
require('node_modules/angular-route/angular-route.js');
require('node_modules/angular-resource/angular-resource.js');
require('./app.js');
require('./controllers/todoCtrl.js');
require('./services/todoStorage.js');
require('./directives/todoFocus.js');
require('./directives/todoEscape.js');

angular.bootstrap(document.body, ['todomvc']);
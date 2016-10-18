Error.stackTraceLimit = Infinity;

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'rxjs/Rx';
import * as testing from '@angular/core/testing';
import * as browser from '@angular/platform-browser-dynamic/testing';
import '../src/bootstrap';

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

var testsContext = require.context('../test/ng2', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);

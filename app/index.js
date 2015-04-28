// require('./styles/base.less');
// require('./styles/desktop.less');
// require('./styles/tablet.less');
// require('./styles/mobile.less');

////////////////////////
//
//	App
if (ON_TEST) { require('angular-mocks/angular-mocks'); }


// Create app
const ngModule = window.angular.module('app', ['ui.router', 'ngAnimate']);

// Add config and run
ngModule.config(require('./config')).run(require('./permissions'));


////////////////////////
//
//	Features

require('./pages')(ngModule);
require('./components')(ngModule);




import {HomeComponent} from './app/home/home.component';
import {AppComponent} from './app/app.component';
import { enableProdMode } from '@angular/core';
import { upgradeAdapter } from './upgrade-adapter';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}



angular.module('app.module.ng1')
  .directive(
    'myApp',
    upgradeAdapter.downgradeNg2Component(AppComponent) as angular.IDirectiveFactory
  );

angular.module('app.module.ng1')
  .directive(
    'myHome',
    upgradeAdapter.downgradeNg2Component(HomeComponent) as angular.IDirectiveFactory
  );



console.log('bootstraping');
export function main() {
  return upgradeAdapter.bootstrap(document.body, ['app.module.ng1']);
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}

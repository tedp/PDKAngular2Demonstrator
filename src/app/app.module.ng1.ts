import {Ng1AppComponent} from './app.component.ng1';
import { upgradeAdapter } from '../upgrade-adapter';
console.log('app.module.ng1');
upgradeAdapter.toString();

angular.module('app.module.ng1', [
  'govuk-single-page-pdk.components.banners'
])
  .component('ng1App', Ng1AppComponent);

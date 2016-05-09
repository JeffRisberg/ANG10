/**
 * Import all Angular components via ES6 imports and register them
 * at your module via their corresponding functions (controller, service, etc.).
 *
 * @author Jeff Risberg
 * @since April 2016
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterStateHelper from 'angular-ui-router.stateHelper';

import homeModule from './modules/Home/home';
import campaignModule from './modules/Campaign/campaign';
import keywordModule from './modules/Keyword/keyword';

import {Router} from './router';

import {UpperFilter, LowerFilter} from './filters/textFilters';

angular.module('myApp', ['ui.router', 'ui.router.stateHelper', homeModule.name, campaignModule.name, keywordModule.name])
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter)
    .config(Router);

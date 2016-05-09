/*
 Import all Angular components via ES6 imports and register them
 at your module via their corresponding functions (controller, service, etc.).
 */

import homeModule from './modules/Home/home';
import campaignModule from './modules/Campaign/campaign';

import {Router} from './router';

import NameService from './services/CampaignService';
import KeywordService from './services/KeywordService';

import {UpperFilter, LowerFilter} from './filters/textFilters';

angular.module('myApp', ["ui.router", homeModule.name, campaignModule.name])
    .service('CampaignService', NameService)
    .service('KeywordService', KeywordService)
    .filter('upper', UpperFilter)
    .filter('lower', LowerFilter)
    .config(Router);

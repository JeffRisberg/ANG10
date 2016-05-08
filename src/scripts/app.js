/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import HomeController from './controllers/HomeController';
import NameService from './services/CampaignService';
import KeywordService from './services/KeywordService';

import {UpperFilter, LowerFilter} from './filters/textFilters';

angular.module('myApp', [])
	.controller('HomeController', HomeController)
	.service('CampaignService', NameService)
	.service('KeywordService', KeywordService)
	.filter('upper', UpperFilter)
	.filter('lower', LowerFilter);
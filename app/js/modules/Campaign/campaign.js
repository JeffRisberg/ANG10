import CampaignController from './CampaignController';
import CampaignService from '../..//services/CampaignService';

require('../../../styles/ang10campaigns.scss');

var campaignModule = angular.module('Campaign', []);

campaignModule.controller('CampaignController', CampaignController);
campaignModule.service('CampaignService', CampaignService);

export default campaignModule;
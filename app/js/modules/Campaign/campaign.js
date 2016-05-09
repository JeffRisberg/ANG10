import CampaignController from "./CampaignController";
import CampaignService from "../..//services/CampaignService";
import KeywordService from "../../services/KeywordService";

var campaignModule = angular.module("Campaign", []);

campaignModule.controller("CampaignController", CampaignController);
campaignModule.service("CampaignService", CampaignService);
campaignModule.service("KeywordService", KeywordService);

export default campaignModule
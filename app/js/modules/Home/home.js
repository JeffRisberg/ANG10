import HomeController from "./HomeController";
import CampaignService from "../../services/CampaignService";
import KeywordService from "../../services/KeywordService";

var homeModule = angular.module("Home", []);

homeModule.controller("HomeController", HomeController);
homeModule.service("CampaignService", CampaignService);
homeModule.service("KeywordService", KeywordService);

export default homeModule
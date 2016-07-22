import AdGroupController from "./AdGroupController";
import AdGroupService from "../..//services/AdGroupService";

var adGroupModule = angular.module("AdGroup", []);

adGroupModule.controller("AdGroupController", AdGroupController);
adGroupModule.service("AdGroupService", AdGroupService);

export default adGroupModule
import KeywordController from "./KeywordController";
import KeywordService from "../../services/KeywordService";

var keywordModule = angular.module("Keyword", []);

keywordModule.controller("KeywordController", KeywordController);
keywordModule.service("KeywordService", KeywordService);

export default keywordModule
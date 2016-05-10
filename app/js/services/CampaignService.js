import Campaign from '../model/Campaign';

class CampaignService {

	/*
	  The below annotation will be processed by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($http) {
		this._$http = $http;
	}

	getCampaigns() {
		return this._$http.get(this.getUrl()).then(this.extract);
	}

	extract(result) {
		return result.data;
	}

	getUrl() {
		return "api/campaigns";
	}
}

export default CampaignService;
/**
 * @ngdoc service
 * @name campaign.service:CampaignService
 * @description Fetches campaigns from back end
 * @author Jeff Risberg
 * @since May 2016
 */
class CampaignService {

	/*
	  The below annotation will be processed by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($http) {
		console.log('constructor for CampaignService');
		this._$http = $http;
	}

	getCampaigns() {
		return this._$http.get(this.getUrl()).then(this.extract);
	}

	extract(result) {
		return result.data;
	}

	getUrl() {
		return 'api/campaigns';
	}
}

export default CampaignService;
import Campaign from '../model/Campaign';

class CampaignService {

	/*
	  The below annotation will be processed by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q) {
		this._$q = $q;
	}

	getCampaign() {
		return this._$q.when(new Campaign());
	}
}

export default CampaignService;
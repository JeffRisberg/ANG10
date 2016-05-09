class CampaignController {

    /*@ngInject;*/
    constructor(CampaignService, KeywordService) {
        CampaignService.getCampaign().then(campaign => {
            this.campaign = campaign;
        });

        KeywordService.getKeywords().then(keywords => {
            this.keywords = keywords;
        });
    }
}

export default CampaignController;
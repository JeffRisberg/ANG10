export default class HomeController {

    /*@ngInject;*/
    constructor(CampaignService, KeywordService) {
        CampaignService.getCampaign().then(campaign => {
            this.campaign = campaign;
        });
        KeywordService.getKeyword().then(keyword => {
            this.keyword = keyword;
        });
    }

}

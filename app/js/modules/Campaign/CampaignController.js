/**
 * @author Jeff Risberg
 * @since April 2016
 */
class CampaignController {

    /*@ngInject;*/
    constructor(CampaignService, KeywordService) {
        CampaignService.getCampaigns().then(campaigns => {
            this.campaigns = campaigns;
        });

        KeywordService.getKeywords().then(keywords => {
            this.keywords = keywords;
        });
    }
}

export default CampaignController;
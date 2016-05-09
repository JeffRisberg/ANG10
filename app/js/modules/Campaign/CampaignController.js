/**
 * @author Jeff Risberg
 * @since April 2016
 */
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
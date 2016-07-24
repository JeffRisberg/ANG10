/**
 * An instance of CampaignController will be created each time this state is activated.
 *
 * It typically fetches content from a Service.
 *
 * @author Jeff Risberg
 * @since April 2016
 */
/**
 * @ngdoc controller
 * @name campaign.controller:CampaignController
 * @description
 * Fetches campaigns and provides them to view
 */
class CampaignController {

    /*@ngInject;*/
    constructor($rootScope, CampaignService) {
        console.log('Constructing CampaignController');

        this.campaignService = CampaignService;

        // Don't do this, because an $on handler will be created each time constructor is called.
        //$rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
        //    console.log("$stateChangeStart for CampaignController to " + toState.name);
        //});

        this.fetchData();
    }

    fetchData() {
        this.campaignService.getCampaigns().then(campaigns => {
            this.campaigns = campaigns;
        });
    }
}

export default CampaignController;
/**
 * An instance of CampaignController will be created each time this state is activated.
 *
 * It typically fetches content from a Service.
 *
 * @author Jeff Risberg
 * @since April 2016
 */
class CampaignController {

    /*@ngInject;*/
    constructor($rootScope, CampaignService) {
        console.log("constructor for CampaignController");

        CampaignService.getCampaigns().then(campaigns => {
            this.campaigns = campaigns;
        });

        // Don't do this, because an $on handler will be created each time constructor is called.
        //$rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
        //    console.log("$stateChangeStart for CampaignController to " + toState.name);
        //});
    }
}

export default CampaignController;
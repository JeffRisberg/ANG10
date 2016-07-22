/**
 * An instance of AdGroupController will be created each time this state is activated.
 *
 * It typically fetches content from a Service.
 *
 * @author Jeff Risberg
 * @since July 2016
 */
/**
 * @ngdoc controller
 * @name adGroup.controller:AdGroupController
 * @description
 * Fetches adGroups and provides them to view
 */
class AdGroupController {

    /*@ngInject;*/
    constructor($rootScope, AdGroupService) {
        console.log('constructor for AdGroupController');

        AdGroupService.getAdGroups().then(adGroups => {
            this.adGroups = adGroups;
        });

        // Don't do this, because an $on handler will be created each time constructor is called.
        //$rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
        //    console.log("$stateChangeStart for AdGroupController to " + toState.name);
        //});
    }
}

export default AdGroupController;
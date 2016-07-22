/**
 * An instance of KeywordController will be created each time this state is activated.
 *
 * It typically fetches content from a Service.
 *
 * @author Jeff Risberg
 * @since April 2016
 */
class KeywordController {

    /*@ngInject;*/
    constructor($rootScope, KeywordService) {
        console.log('constructor for KeywordController');

        KeywordService.getKeywords().then(keywords => {
            this.keywords = keywords;
        });

        // Don't do this, because an $on handler will be created each time constructor is called.
        //$rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
        //    console.log("$stateChangeStart for KeywordController to " + toState.name);
        //});
    }
}

export default KeywordController;
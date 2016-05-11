/**
 * @author Jeff Risberg
 * @since April 2016
 */
class HomeController {

    /*@ngInject;*/
    constructor(CampaignService, KeywordService) {

        this.metrics = [
            {name: 'Widgets', expected: 1.00, actual: 0.25},
            {name: 'Wombats', expected: 0.60, actual: 0.35},
            {name: 'Woofers', expected: 0.90, actual: 0.45},
            {name: 'Wingnuts', expected: 1.00, actual: 0.55}
        ];
    }
}

export default HomeController;
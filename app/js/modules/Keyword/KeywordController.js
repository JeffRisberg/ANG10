/**
 * @author Jeff Risberg
 * @since April 2016
 */
class KeywordController {

    /*@ngInject;*/
    constructor(KeywordService) {
       KeywordService.getKeywords().then(keywords => {
            this.keywords = keywords;
        });
    }
}

export default KeywordController;
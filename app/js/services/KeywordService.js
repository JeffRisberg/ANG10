import Keyword from '../model/Keyword';

class KeywordService {

    /*
     The below annotation will be processed by ngAnnotate, which
     will annotate the constructor after compiling for minification.
     */
    /*@ngInject;*/
    constructor($q) {
        this._$q = $q;
    }

    getKeywords() {
        return this._$q.when([
            new Keyword("dog"), new Keyword("cat"), new Keyword("chimp"), new Keyword("tiger")
        ]);
    }
}

export default KeywordService
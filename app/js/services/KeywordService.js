
class KeywordService {

    /*
     The below annotation will be processed by ngAnnotate, which
     will annotate the constructor after compiling for minification.
     */
    /*@ngInject;*/
    constructor($http) {
        console.log('constructor for KeywordService');
        this._$http = $http;
    }

    getKeywords() {
        return this._$http.get(this.getUrl()).then(this.extract);
    }

    extract(result) {
        return result.data;
    }

    getUrl() {
        return 'api/keywords';
    }
}

export default KeywordService;
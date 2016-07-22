
class AdGroupService {

    /*
     The below annotation will be processed by ngAnnotate, which
     will annotate the constructor after compiling for minification.
     */
    /*@ngInject;*/
    constructor($http) {
        console.log('constructor for AdGroupService');
        this._$http = $http;
    }

    getAdGroups() {
        return this._$http.get(this.getUrl()).then(this.extract);
    }

    extract(result) {
        return result.data;
    }

    getUrl() {
        return 'api/adGroups';
    }
}

export default AdGroupService;
import template from './fetcher.tmpl.html';

/**
 * This is a simple example of a button that fetches data, expressed as a class instead of a function.
 *
 * Some of the clever parts here include the builder() method, which makes an instance of the class
 * to register, and the fact that the methods such as link() must be bound to this.  Also, we pass
 * scope into the onClick method, rather than having it stored in instance state.
 *
 * @author Jeff Risberg
 * @since April 30, 2016
 */
class Fetcher {

    constructor($http, ...args) {
        this.template = template;
        this.scope = {};
        this.restrict = 'E';
        this.$http = $http;

        this.link = this.link.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    link(scope, element, attr) {
        scope.onClick = () => this.onClick(scope);
        scope.text = 'Click here to fetch';
    }

    onClick(scope) {
        this.$http.get('/api/nice');
        scope.text = 'Fetched';
    }

    static builder($http) {
        return new Fetcher($http);
    }
}

var fetcherModule = angular.module("fetcher", []).directive("fetcher", ['$http', Fetcher.builder]);

export default fetcherModule;
Router.$inject = ['stateHelperProvider', '$urlRouterProvider'];

function Router(stateHelperProvider, $urlRouterProvider) {

    'use strict';

    $urlRouterProvider.otherwise('/home');

    stateHelperProvider
        .state({
            name: 'root',
            url: '/',
            template: require('./modules/AppRoot/index.tmpl.html'),
            children: [
                {
                    name: 'home',
                    url: 'home',
                    controller: 'HomeController as homeCtrl',
                    template: require('./modules/Home/index.tmpl.html')
                },
                {
                    name: 'campaign',
                    url: 'campaign',
                    controller: 'CampaignController as campaignCtrl',
                    template: require('./modules/Campaign/index.tmpl.jade')
                },
                {
                    name: 'adGroup',
                    url: 'adGroup',
                    controller: 'AdGroupController as adGroupCtrl',
                    template: require('./modules/AdGroup/index.tmpl.jade')
                },
                {
                    name: 'keyword',
                    url: 'keyword',
                    controller: 'KeywordController as keywordCtrl',
                    template: require('./modules/Keyword/index.tmpl.jade')
                }]
        });
}

export var Router = Router;
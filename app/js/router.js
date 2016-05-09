Router.$inject = ['stateHelperProvider', '$urlRouterProvider'];

function Router(stateHelperProvider, $urlRouterProvider) {

    "use strict";

    $urlRouterProvider.otherwise("/home");

    stateHelperProvider
        .state({
            name: 'root',
            url: "/",
            template: require("./modules/AppRoot/index.tmpl.html"),
            children: [
                {
                    name: "home",
                    url: "home",
                    controller: "HomeController as homeCtrl",
                    template: require("./modules/Home/index.tmpl.html")
                },
                {
                    name: 'campaign',
                    url: "campaign",
                    controller: "CampaignController as campaignCtrl",
                    template: require("./modules/Campaign/index.tmpl.html")
                },
                {
                    name: 'keyword',
                    url: "keyword",
                    controller: "KeywordController as keywordCtrl",
                    template: require("./modules/Keyword/index.tmpl.html")
                }]
        });
}

export var Router = Router;
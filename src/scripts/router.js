Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {

    "use strict";

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            controller : "HomeController as homeCtrl",
            templateUrl: "html/home.tmpl.html"
        })
        .state('campaign', {
            url: "/campaign",
            controller : "CampaignController as campaignCtrl",
            templateUrl: "html/campaign.tmpl.html"
        })
}

export var Router = Router;
'use strict';

var slider = function () {
    return {
        restrict: 'E',
        scope: {metric: '='},
        template: require("./slider.tmpl.html"),

        link: function ($scope, $element, $attrs) {

            // temporary strings bound to the results of the range inputs
            $scope.actualStr = $scope.metric.actual;
            $scope.expectedStr = $scope.metric.expected;

            // update the slider results back to the metrics with an explicit type conversion
            $scope.$watch("actualStr", function () {
                $scope.metric.actual = parseFloat($scope.actualStr);
            });
            $scope.$watch("expectedStr", function () {
                $scope.metric.expected = parseFloat($scope.expectedStr);
            });
        }
    }
}

var sliderModule = angular.module("slider", []).directive("slider", [slider]);

export default sliderModule;
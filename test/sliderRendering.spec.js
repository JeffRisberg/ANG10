/**
 * Created by Brandon Risberg on 4/3/2016.
 */

describe('Slider Directive Rendering', function () {
    beforeEach(module('ang10'));
    beforeEach(module('templates'));

    var compile, mockBackend, rootScope;

    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        rootScope = $rootScope;
    }));

    it('should render HTML based on first metric correctly', function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            expected: 1.00,
            actual: 0.66
        };
        scope.title = 'ANG10';

        var element = compile('<slider metric="metric"/>')(scope);

        scope.$digest();

        var renderedHTML = element.html().trim();

        expect($('.slider-actual', renderedHTML)).toExist();
        expect($('.slider-expected', renderedHTML)).toExist();

        expect($('.slider-actual span.num', renderedHTML)).toExist();
        expect($('.slider-expected span.num', renderedHTML)).toExist();

        expect($('.slider-actual span.num', renderedHTML)).toHaveText('0.66');
        expect($('.slider-expected span.num', renderedHTML)).toHaveText('1');
    });

    it('should render HTML based on second metric correctly', function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Widgets',
            actual: 0.55,
            expected: 0.66
        };
        scope.title = 'ANG10';

        var element = compile('<slider metric="metric"/>')(scope);

        scope.$digest();

        var renderedHTML = element.html().trim();

        expect($('.slider-actual', renderedHTML)).toExist();
        expect($('.slider-expected', renderedHTML)).toExist();

        expect($('.slider-actual span.num', renderedHTML)).toExist();
        expect($('.slider-expected span.num', renderedHTML)).toExist();

        expect($('.slider-actual span.num', renderedHTML)).toHaveText('0.55');
        expect($('.slider-expected span.num', renderedHTML)).toHaveText('0.66');
    });
});

/**
 * Created by Brandon Risberg on 5/6/2016.
 */

describe('Fetcher Directive Rendering', function () {
    beforeEach(module('ang10'));
    beforeEach(module('templates'));

    var compile, mockBackend, rootScope, httpBackend;

    beforeEach(inject(function ($compile, $rootScope, $httpBackend) {
        compile = $compile;
        rootScope = $rootScope;
        httpBackend = $httpBackend;

        httpBackend.when("GET", "/api/nice").respond([{}, {}, {}]);
    }));

    it('should render HTML', function () {
        var scope = rootScope.$new();

        scope.title = 'ANG10';

        var element = compile('<fetcher/>')(scope);

        scope.$digest();

        var renderedHTML = element.html().trim();

        expect(renderedHTML).toContain("Click here");

        expect($('.btn', renderedHTML)).toExist();
        expect($('.btn-default', renderedHTML)).toExist();

        expect($('.btn', element)).toExist();

        $('.btn', element).click();

        var revisedHTML = element.html().trim();

        expect(revisedHTML).toContain("Fetched");
    });
});

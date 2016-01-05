/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe('unit test peopleList controller', function () {
    var scope;
    var ctrl;
    var http;
    beforeEach(module('metachi'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      http = $rootScope.$new();
      ctrl = $controller('peopleList', { $scope: scope },{$http: http});
    }));
    
    // test the existance of "peopleList" controller
    it('should have a peopleList controller', function () {
        expect(ctrl).not.toBe(null);
    });
    
    // testing json output is null or not
    it("should have data in people.json",function(){
        expect(scope.jsonData).not.toBe(null);
    });
    
    
    
});
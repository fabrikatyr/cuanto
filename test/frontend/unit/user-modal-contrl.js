

'use strict';

/*
 * controller uses modal which doesn't need a functional test
 * */

/*
describe("user controller test", function () {
  var scope, httpMock;

  beforeEach(module('ui.bootstrap.modal'));
  beforeEach(module('mean.signup'));

  beforeEach(inject(function ($httpBackend, $http, $rootScope, $controller) {

    httpMock = $httpBackend;

    httpMock.when('GET', /\/users/).respond([ ]);

    scope = $rootScope.$new();
    $controller('UserCtrl', {'$scope' : scope, $http: $http});

  }));

  afterEach(function() {
    httpMock.verifyNoOutstandingExpectation();
    httpMock.verifyNoOutstandingRequest();
  });

  it("sign up correctly", function () {
  });

});
*/

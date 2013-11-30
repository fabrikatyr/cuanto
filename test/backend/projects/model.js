/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Project = mongoose.model('Project');

//Globals
var user;
var project;

//The tests
describe('<Unit Test>', function() {
  describe('Model Project:', function() {
    before(function(done) {
      user = new User({
        name: 'Full name',
        email: 'test@test.com',
        username: 'user',
        password: 'password'
      });

      user.save(function(err) {                
        project = new Project({
			projectName: 'test project',
            unitquantity: 666,
            unitprice: 6.66,
            enddate: '12/12/2012',
            startdate: '12/12/2012'
          user: user
        });

        done();
      });
    });

    describe('Method Save', function() {
      it('should be able to save whithout problems', function(done) {
        project.save(function(err) {
          should.not.exist(err);
          done();
        });
      });

      it('should be able to show an error when try to save witout title', function(done) {
        project.projectName = '';

        project.save(function(err) {
          should.exist(err);
          done();
        });
      });
    });

  });
});

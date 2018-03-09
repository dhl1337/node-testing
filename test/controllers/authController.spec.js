let assert = require('assert');
let authController = require('../../controllers/authController');

describe('authController', function () {
	beforeEacb(function() {
		authController.setRoles(['user'])
	})

	describe('isAuthorized', function () {
		it('Should return false if not authorized', function () {
			assert.equal(false, authController.isAuthorized(['admin']))
		})

		it('Should return true if is authorized', function () {
			assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'))
		})
	})

	describe('isAuthorizedAsync', function () {
		it('Should return false if not authorized', function (done) {
			authController.isAuthorizedAsync(['user'], 'admin', function (isAuth) {
				assert.equal(false, isAuth);
				done();
			})
		})
	})
});
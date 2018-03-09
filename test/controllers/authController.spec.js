let assert = require('assert');
let authController = require('../../controllers/authController');

describe('authController', () => {
	describe('isAuthorized', () => {
		it('Should return false if not authorized', () => {
			assert.equal(false, authController.isAuthorized(['user'], 'admin'))
		})

		it('Should return true if is authorized', () => {
			assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'))
		})
	})
});
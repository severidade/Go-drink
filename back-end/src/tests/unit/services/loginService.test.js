import { expect } from 'chai';
import sinon from 'sinon';

import LoginService from '../../../api/service/LoginService';
const { User } = require('../../../database/models');

describe('Login Service', () => {
	before(() => {
		sinon.stub(User, 'create').resolves(frameMockWithId);
	});


	after(() => {
		sinon.restore();
	});

});

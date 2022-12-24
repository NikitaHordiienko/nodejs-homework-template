require('dotenv').config();

const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../app');
const User = require('../../models/users/index');

const { DB_TEST_HOST } = process.env;

describe('test users login', () => {
    let server;

    beforeAll(() => {
        mongoose.connect(DB_TEST_HOST)
    });

    afterAll( async () => {
        await mongoose.connection.close();
    });

    test('user login successfully', async () => {
        const newUser = {
            email: 'random@email.com',
            password: '$2a$10$vtNhH.py0c03jJkREYRkyOCy7ufUTTu/IBvZaY.2NzIOlh4uH1LIy',
            subscription: 'starter',
            avatarURL: 'http://example.com'
        };

        const user = await User.create(newUser);

        const userLoginData = {
            email: 'random@email.com',
            password: '123456'
        };

        const response = await request(app).post('/api/users/login').send(userLoginData);        

        expect(response.statusCode).toEqual(200);

        const { token } = response.body;

        expect(token).toEqual(expect.any(String));

        expect(response.body.user).toEqual(expect.any(Object));

        expect(response.body.user.email).toEqual(expect.any(String));

        expect(response.body.user.subscription).toEqual(expect.any(String));

        const userFromDb = await User.findById(user._id);

        expect(userFromDb.token).toEqual(token);
    })
});
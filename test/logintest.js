import assert from 'assert';
import login from '../utils/login.mjs'

it ("Login API should return a valid login token", async()=>{
    const loginToken = await login({userName:"you18012@byui.edu", password: 'Darkknight123!'});
    assert.equal(loginToken.length,36);

})
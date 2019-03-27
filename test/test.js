const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Todo = require('../models/todo');

// describe('sanity check', function () {
//     it('should be 2', function () {
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });

describe('todo model', () => {
    it('should give todo by id', async() => {
        const theTodo = await Todo.getById(1);
        console.log(theTodo);
        expect(theTodo).to.be.an.instanceOf(Todo);
    });
});

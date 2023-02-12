


const { describe } = require("node:test");
const sum = require("../sum");

// testing methods


/* 
beforeAll(fn, timeout)
it's used to execute fn before all the tests, the default timeout is 5 seconds we can change it 

beforeEach(fn, timeout)
execute fn before each test

afterAll()
execute fn after all the tests

afterEach()
execute fn after each test usually used to cleanup
*/



// check this example 


beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll


/* 
describe("colloecting a set of related tests to organize our code", () => {
    test("should return 0 if there is no input",() => {
        expect(sum()).toBe(0);
    });


    test("should return the sum of two numbers", () => {
        expect(sum(1,2)).toBe(3);
    });

    test("sum 3 numbers", () =>{
        expect(sum(1,2,3)).toBe(6); 
    })
})

describe("random test", () => {

    test("test", () => {

        expect((true)).toBe(true);
    })
}) */


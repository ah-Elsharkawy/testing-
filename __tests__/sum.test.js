


const { describe } = require("node:test");
const sum = require("../sum");

//describe collects group of tests related to each other 

// only is used to run only the test it's used with 

// skip is used to skip the test or a describe 

describe("colloecting a set of related tests to organize our code", () => {
    test("should return 0 if there is no input",() => {
        expect(sum()).toBe(0);
    });


    test.only("should return the sum of two numbers", () => {
        expect(sum(1,2)).toBe(3);
    });

    test("sum 3 numbers", () =>{
        expect(sum(1,2,3)).toBe(6); 
    })
})

describe.skip("random test", () => {

    test("test", () => {

        expect((true)).toBe(true);
    })
})


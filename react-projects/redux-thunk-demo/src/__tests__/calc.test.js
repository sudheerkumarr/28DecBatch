import calc from '../components/calculator';

/*
JEST - Framework, built using js. 
 - helps to 
    1. Finding Tests- finding files that are having extension '.test.js'
    2. Running the tests.
    3. Determining whether the tests pass or fail.


React Testing Library -  provides you functions to catch dom element and perform some action below are some of its function

render, fireEvent, screen...


    describe - define test suite 
    test - creating test cases
    syntax:
    describe('description', callbackFunction) {
        test('description about test case', callbackFunction);
        test('description about test case', callbackFunction);
        test('description about test case', callbackFunction);
        test('description about test case', callbackFunction);
    }
*/

describe('test suite to validate functions defined in Calc', () => {
    test('Verify add function', () => {
        let result = calc.add(10, 20);
        expect(result).toBe(30);
    });
    test('Verify add with 2 negative numbers', () => {
        let result = calc.add(-10, -20);
        expect(result).toBe(-30);
    });

    test('Verify add function one positive & one negative value', () => {
        let result = calc.add(10, -20);
        expect(result).toBe(-10);
    });

    test('Verify mul function', () => {
        let result = calc.mul(10, 20);
        expect(result).toBe(200);
        // let mockFn = jest.fn(() => 200);
        // expect(mockFn()).toBe(200);

    });
    test('Verify div function', () => {
        let result = calc.div(10, 20);
        expect(result).toBe(0.5);
    });

    // arrays
    test('verify array length test', () => {
        let numArr = [10, 20, 30];
        expect(numArr.length).toBe(3);
    });
    test('verify given element present in array or not', () => {
        let numArr = [10, 20, 30];
        expect(numArr).toContain(30);
    });
    test('verify given element present in array at specific location', () => {
        let numArr = [10, 20, 30];
        expect(numArr[2]).toBe(30);
    });
    test('verify person obj', () => {
        let person = {
            id: 101,
            name: 'Sam'
        };
        expect(person.id).toBe(101);
        expect(person.name).toBe('Sam');
    });

    //mock - func a - 20 lines - 5line fb - func b

    test('mock test to return array', () => {
        let mockFn = jest.fn(() => [10, 20]);
        expect(mockFn()[1]).toBe(20);
    });

    test('mock test to return obj', () => {
        let person = {
            id: 101,
            name: 'Sam'
        }
        let mockFn = jest.fn(() => person);
        expect(mockFn().id).toBe(101);
        expect(mockFn().name).toBe('Sam');
    });

    // Spy
    test('spy test on add method', () => {
        const spy = jest.spyOn(calc, 'add');
        const result = calc.sumSq(10, 10);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        //expect(spy).not.toHaveBeenCalled();
        // expect(spy).not.toHaveBeenCalled();
        expect(result).toBe(400);
    });

})
// primitive types

// The most basic datatype - true/false switch
const flag1: Boolean = true;
// inferred-type
const flag2 = true;

// Be a programming god - create your own type
type Year = number;
const year: Year = 2020;

// Undefined and null not included in types like js, to
// get a null you will set it as either null or number
let willSetValueLater: null | number = null;
console.log('willSetValueLater: ' + willSetValueLater);
willSetValueLater = 2020;
console.log('willSetValueLater: ' + willSetValueLater);

// none-primitive

// Arrays
let arrayNumber: number[] = [];
let myCastTypeArrayNumber: Array<number> = [];
myCastTypeArrayNumber.push(123);
console.log('myCastTypeArrayNumber: ' + JSON.stringify(myCastTypeArrayNumber));

// Tuples (two values)
let longlatSimple: [number, number] = [51.5074, 0.1278];
let longlatInferredType = [51.5074, 0.1278];

// Enums design pattern
enum ChildrenEnum {JOHN = 'John', JANE = 'Jane', MARY = 'Mary'}
let john: ChildrenEnum = ChildrenEnum.JOHN;
console.log('What is JOHN enum? ' + john);

// Maps
// inferred type: Map<string, string>
const myLongLatMapWithInferredType = new Map([
    ['London', '51.5074'],
    ['London', '0.1278'],
]);

// interfaces

// Typing objects-as-records via interfaces
interface longlat {
    long: number;
    lat: number;
}
function longlatToString(longlat: longlat) {
    return `${longlat.long}, ${longlat.lat}`;
}
// Object literal (anonymous interfaces) inline:
function longlatToStringWithAnonymousInterfaces(longlat: {
    long: number;
    lat: number;
}) {
    return `${longlat.long}, ${longlat.lat}`;
}

// Place optional params (phone) and method in interface
interface Client {
    name: string;
    email: string;
    phone?: string;
    longlatToString(longlat: longlat): string;
}

// Factory design pattern made easy using type cast
interface resultsWithUnkownTypeCast<SomeType> {
    result: SomeType;
}
type numberResult = resultsWithUnkownTypeCast<number>;
type arrayResult = resultsWithUnkownTypeCast<[]>;

// functions

// Simple function
const turnStringToNumber: (str: String) => Number =
    (str: String) => Number(str);
// %inferred-type: (num: number) => string
const turnStringToNumberMinimalist = (str: String) => Number(str);
console.log('turnStringToNumber: ' + turnStringToNumber('001'));
console.log('turnStringToNumberMinimalist: ' + turnStringToNumberMinimalist('002'));

function functionWithExplicitReturn(): void { return undefined }
function functionWithImplicitReturn(): void { }

// Simple functions with callbacks
function simpleFunctionWithCallback(callback: (str: string) => void ) {
    return callback('done something successfully');
}
simpleFunctionWithCallback(function (str: string): void {
    console.log(str);
});

// Never callback  - not placing never is inferred as never
function neverCallbackFunction(callback: (str: string) => never ) {
    return callback('fail');
}
// neverCallbackFunction(function(message: string): never {
//     throw new Error(message);
// });

// Complex Callback and specifiy result types
function complexCallbackWithResultType(callback: () => string): string {
    return callback();
}
console.log('doSomethingAndLetMeKnow: ' + (complexCallbackWithResultType(String), 'Done it!'));

// Function with optional params using '?'
function functionWithOptionalCallbackParams(callback?: (str: String) => string) {
    if (callback === undefined) {
        callback = String;
    }
    return callback('sucess');
}

// Function with setting the type with default values
function createLonglatWithDefaultValues(long:number = 0, lat:number = 0): [number, number] {
    return [long, lat];
}
console.log('createLonglatWithDefaultValues: ' + createLonglatWithDefaultValues(51.5074, 0.1278))
console.log('createLonglatWithDefaultValues: ' + createLonglatWithDefaultValues())

// function with rest parameters
// A rest parameter declared by prefixing an identifier with three dots (...)
function functionWithRestParams(...names: string[]): string {
    return names.join(', ');
}
console.log(functionWithRestParams('John', 'Jane', 'Mary'));

// Function with potential two params types
function isNumber(numOrStr: number|string): Boolean {
    if (typeof numOrStr === 'string') {
        return false;
    } else if (typeof numOrStr === 'number') {
        return true;
    } else {
        throw new Error('Not sure the type');
    }
}
console.log('isNumber: ' + isNumber('123'));
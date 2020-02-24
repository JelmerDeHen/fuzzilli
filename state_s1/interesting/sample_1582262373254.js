function main() {
const v4 = {length:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v5 = {constructor:13.37,constructor:13.37,__proto__:v4,toString:Number,a:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a"], withMethods: ["toString"])
let v6 = v5;
const v8 = {getPrototypeOf:Number,setPrototypeOf:Number,preventExtensions:Number,apply:Number,ownKeys:Number};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "preventExtensions", "getPrototypeOf", "setPrototypeOf", "ownKeys"])
const v10 = new Proxy(v6,v8);
// v10 = .unknown
let v12 = v10;
let v15 = 0;
let v18 = 0;
const v24 = {set:Number};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v26 = Object.defineProperty(v10,268435456,v24);
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();

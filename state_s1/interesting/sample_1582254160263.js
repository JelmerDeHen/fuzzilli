function main() {
const v5 = {length:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v6 = {constructor:13.37,length:13.37,__proto__:v5,toString:Number,a:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "length"], withMethods: ["toString"])
const v23 = {length:"N0Xx92zvHQ"};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v24 = {constructor:13.37,length:13.37,__proto__:v23,toString:Number,a:"N0Xx92zvHQ"};
// v24 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor"], withMethods: ["toString"])
let v25 = v24;
const v31 = {length:"N0Xx92zvHQ"};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v32 = {constructor:13.37,length:13.37,__proto__:v31,toString:Number,a:"N0Xx92zvHQ"};
// v32 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
const v40 = v25.__proto__;
// v40 = .object()
const v76 = {toString:v40,...v6,..."N0Xx92zvHQ",...v31,...Number,...v25};
// v76 = .object(ofGroup: Object, withProperties: ["MIN_SAFE_INTEGER", "prototype", "NaN", "NEGATIVE_INFINITY", "toString", "a", "POSITIVE_INFINITY", "MAX_SAFE_INTEGER", "length", "MAX_VALUE", "MIN_VALUE", "__proto__", "EPSILON", "constructor"], withMethods: ["indexOf", "toString", "charCodeAt", "padEnd", "codePointAt", "lastIndexOf", "split", "isInteger", "startsWith", "includes", "padStart", "replace", "isSafeInteger", "repeat", "slice", "isNaN", "isFinite", "substring", "endsWith", "concat", "trim", "charAt"])
let v100 = 0;
const v101 = v100 + 1;
// v101 = .primitive
v100 = v101;
}
%NeverOptimizeFunction(main);
main();

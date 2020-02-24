function main() {
const v5 = {length:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v6 = {constructor:13.37,length:13.37,__proto__:v5,toString:Number,a:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "constructor", "a", "__proto__"], withMethods: ["toString"])
const v23 = {length:"N0Xx92zvHQ"};
// v23 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v24 = {constructor:13.37,length:13.37,__proto__:v23,toString:Number,a:"N0Xx92zvHQ"};
// v24 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
let v25 = v24;
const v31 = {length:"N0Xx92zvHQ"};
// v31 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v32 = {constructor:13.37,length:13.37,__proto__:v31,toString:Number,a:"N0Xx92zvHQ"};
// v32 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
const v40 = v25.__proto__;
// v40 = .object()
const v76 = {toString:v40,...v6,..."N0Xx92zvHQ",...v31,...Number,...v25};
// v76 = .object(ofGroup: Object, withProperties: ["NEGATIVE_INFINITY", "length", "POSITIVE_INFINITY", "MAX_VALUE", "constructor", "toString", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER", "__proto__", "EPSILON", "NaN", "a", "MIN_VALUE", "prototype"], withMethods: ["substring", "isInteger", "toString", "isFinite", "charAt", "charCodeAt", "isNaN", "includes", "split", "startsWith", "lastIndexOf", "padStart", "indexOf", "concat", "codePointAt", "slice", "repeat", "isSafeInteger", "endsWith", "padEnd", "trim", "replace"])
let v100 = 0;
const v101 = v100 + 1;
// v101 = .primitive
v100 = v101;
}
%NeverOptimizeFunction(main);
main();

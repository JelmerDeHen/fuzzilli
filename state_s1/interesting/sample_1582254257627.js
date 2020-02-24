function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {length:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v6 = {constructor:13.37,length:13.37,__proto__:v5,toString:Number,a:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"], withMethods: ["toString"])
const v10 = {length:"N0Xx92zvHQ"};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
let v17 = 0;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
let v23 = 1337;
const v27 = {a:"object",d:"N0Xx92zvHQ",e:0,..."N0Xx92zvHQ",...v23,...Number,...v4,...v6};
// v27 = .object(ofGroup: Object, withProperties: ["MIN_VALUE", "MAX_VALUE", "e", "constructor", "length", "NEGATIVE_INFINITY", "prototype", "EPSILON", "NaN", "__proto__", "a", "d", "MIN_SAFE_INTEGER", "POSITIVE_INFINITY", "MAX_SAFE_INTEGER"], withMethods: ["push", "unshift", "codePointAt", "reduce", "every", "isInteger", "replace", "pop", "sort", "forEach", "toString", "some", "split", "charCodeAt", "isSafeInteger", "entries", "keys", "flat", "toLocaleString", "isNaN", "copyWithin", "padStart", "map", "isFinite", "lastIndexOf", "trim", "fill", "substring", "values", "findIndex", "join", "slice", "startsWith", "padEnd", "flatMap", "endsWith", "reverse", "reduceRight", "splice", "includes", "repeat", "filter", "shift", "charAt", "indexOf", "concat", "find"])
}
%NeverOptimizeFunction(main);
main();

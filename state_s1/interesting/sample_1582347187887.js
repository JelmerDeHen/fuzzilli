function main() {
const v1 = Symbol.isConcatSpreadable;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v10 = [];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v11 = {a:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
    const v12 = {__proto__:v9,constructor:v11,e:v10};
    // v12 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "e"])
    const v13 = v1 in v12;
    // v13 = .boolean
}
const v14 = {b:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,e:v5};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["ownKeys", "getPrototypeOf", "set", "b", "call", "construct", "isExtensible", "e", "preventExtensions", "get"])
const v16 = new Proxy(v4,v14);
// v16 = .unknown
v16[1] = "asyncIterator";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = Symbol.isConcatSpreadable;
// v1 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v10 = [];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v11 = {a:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
    const v12 = {__proto__:v9,constructor:v11,e:v10};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e"])
    const v13 = v1 in v12;
    // v13 = .boolean
}
const v14 = {b:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,e:v5};
// v14 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["e", "preventExtensions", "isExtensible", "construct", "ownKeys", "call", "b", "getPrototypeOf", "set", "get"])
const v16 = new Proxy(v4,v14);
// v16 = .unknown
v16[1] = "asyncIterator";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = Symbol.isConcatSpreadable;
// v1 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v10 = [];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v11 = {a:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
    const v12 = {__proto__:v9,constructor:v11,length:v10};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
    const v13 = v1 in v12;
    // v13 = .boolean
}
const v14 = {b:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["ownKeys", "construct", "isExtensible", "get", "has", "call", "getPrototypeOf", "b", "set", "preventExtensions"])
const v16 = new Proxy(v4,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

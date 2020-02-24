function main() {
const v1 = Symbol.isConcatSpreadable;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v10 = [];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v11 = {a:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
    const v12 = {__proto__:v9,constructor:v11,e:v10};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "constructor"])
    const v13 = v1 in v12;
    // v13 = .boolean
}
const v14 = {b:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,e:v5};
// v14 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["preventExtensions", "b", "getPrototypeOf", "construct", "call", "get", "isExtensible", "ownKeys", "e", "set"])
const v16 = new Proxy(v4,v14);
// v16 = .unknown
v16[1] = "asyncIterator";
}
%NeverOptimizeFunction(main);
main();

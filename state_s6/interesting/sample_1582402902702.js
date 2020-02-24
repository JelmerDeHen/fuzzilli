function main() {
const v1 = Symbol.iterator;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v2 = v1[v1];
// v2 = .unknown
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8,v9,v10) {
    'use strict'
    let v12 = 13.37;
    const v14 = [13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v15 = {b:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v12 = NaN;
    const v20 = [2,1337];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v21 = [2,13.37,2];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v22 = v20;
    v21.length = 1337;
    const v24 = {get:NaN};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v26 = Object.seal(v21,65537,v24);
    // v26 = .object()
    const v28 = v21.includes(v12,v22,v21,"name",v15);
    // v28 = .boolean
    let v31 = 0;
}
const v34 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "ownKeys", "construct", "deleteProperty", "get", "set", "preventExtensions", "isExtensible", "has", "setPrototypeOf", "call"])
const v36 = new Proxy(v5,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

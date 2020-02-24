function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v12 = {get:v6};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v14 = Object.defineProperty(v7,1,v12);
    // v14 = .undefined
    return v8;
}
const v15 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:1337,has:v6};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["deleteProperty", "getPrototypeOf", "call", "construct", "set", "isExtensible", "ownKeys", "preventExtensions", "has", "get"])
const v17 = new Proxy(v5,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

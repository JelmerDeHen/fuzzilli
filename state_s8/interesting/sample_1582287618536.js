function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v12 = {get:v6};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v14 = Object.defineProperty(v7,1,v12);
    // v14 = .undefined
    return v8;
}
const v15 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:1337,has:v6};
// v15 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["getPrototypeOf", "call", "deleteProperty", "isExtensible", "construct", "get", "preventExtensions", "ownKeys", "set", "has"])
const v17 = new Proxy(v5,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

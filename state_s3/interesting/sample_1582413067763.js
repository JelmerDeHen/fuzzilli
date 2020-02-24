function main() {
function v2(v3,v4,v5,v6) {
    'use strict'
    let v8 = 13.37;
    const v9 = {b:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v8 = NaN;
    const v14 = [NaN,13.37,eval];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v15 = Uint8ClampedArray;
    v14.length = 1337;
    const v16 = v14.indexOf(v8,v15,v14,13.37,v9);
    // v16 = .integer
}
const v17 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "getPrototypeOf", "ownKeys", "call", "deleteProperty", "has", "construct", "set", "preventExtensions", "get", "setPrototypeOf"])
const v19 = new Proxy(Proxy,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

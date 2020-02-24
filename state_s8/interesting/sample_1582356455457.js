function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v11 = new Uint32Array(13.37);
    // v11 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
    v11.constructor = Uint8ClampedArray;
    const v14 = v11.slice(-2147483649,1337);
    // v14 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "byteLength", "constructor"], withMethods: ["forEach", "reduce", "findIndex", "reverse", "filter", "find", "indexOf", "entries", "includes", "map", "every", "copyWithin", "subarray", "join", "fill", "lastIndexOf", "values", "sort", "keys", "slice", "set", "some", "reduceRight"])
    return v2;
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "setPrototypeOf", "has", "deleteProperty", "preventExtensions", "construct", "set", "isExtensible", "call", "getPrototypeOf", "get"])
const v17 = new Proxy(v2,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

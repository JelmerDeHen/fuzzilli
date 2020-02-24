function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v11 = new Int8Array(1337);
    // v11 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
    v11.constructor = Uint8ClampedArray;
    const v14 = v11.slice(1024,234126503);
    // v14 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["findIndex", "copyWithin", "keys", "subarray", "indexOf", "some", "reverse", "reduce", "slice", "fill", "sort", "entries", "join", "lastIndexOf", "includes", "every", "values", "reduceRight", "map", "filter", "find", "forEach", "set"])
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "construct", "deleteProperty", "isExtensible", "has", "set", "getPrototypeOf", "get", "call", "setPrototypeOf"])
const v17 = new Proxy(v2,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

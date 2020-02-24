function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v11 = new Int8Array(1337);
    // v11 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
    v11.constructor = Uint8ClampedArray;
    const v14 = v11.slice(1024,234126503);
    // v14 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "buffer", "constructor", "length", "byteOffset"], withMethods: ["every", "slice", "reverse", "values", "filter", "findIndex", "reduceRight", "includes", "subarray", "fill", "reduce", "find", "sort", "map", "entries", "keys", "set", "indexOf", "copyWithin", "some", "forEach", "join", "lastIndexOf"])
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getPrototypeOf", "setPrototypeOf", "isExtensible", "preventExtensions", "call", "construct", "get", "has", "set", "ownKeys"])
const v17 = new Proxy(v2,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

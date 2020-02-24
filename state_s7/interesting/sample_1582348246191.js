function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v11 = new Int8Array(414032354);
    // v11 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
    v11.constructor = Uint8ClampedArray;
    const v14 = v11.slice(1024,234126503);
    // v14 = .object(ofGroup: Int8Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "length", "constructor"], withMethods: ["entries", "reduce", "forEach", "subarray", "some", "copyWithin", "find", "indexOf", "filter", "map", "findIndex", "join", "fill", "sort", "keys", "every", "set", "includes", "reduceRight", "lastIndexOf", "slice", "values", "reverse"])
}
const v15 = {e:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "setPrototypeOf", "ownKeys", "call", "e", "has", "getPrototypeOf", "get", "isExtensible", "preventExtensions", "construct"])
const v17 = new Proxy(v2,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

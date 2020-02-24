function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v11 = new Int8Array(1024);
    // v11 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
    v11.constructor = Uint8ClampedArray;
    const v14 = v11.slice(-2273743928,234126503);
    // v14 = .object(ofGroup: Int8Array, withProperties: ["buffer", "constructor", "byteOffset", "length", "__proto__", "byteLength"], withMethods: ["indexOf", "reduce", "join", "map", "lastIndexOf", "every", "findIndex", "forEach", "entries", "values", "fill", "includes", "reverse", "slice", "filter", "sort", "find", "keys", "copyWithin", "set", "some", "subarray", "reduceRight"])
}
const v15 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "construct", "set", "has", "isExtensible", "call", "ownKeys", "get", "getPrototypeOf", "setPrototypeOf", "preventExtensions"])
const v17 = new Proxy(v2,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
let v20 = 0;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [9007199254740993,9007199254740993,9007199254740993];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v3 = v2;
const v6 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v7(v8,v9,v10,v11) {
    'use strict'
    v3[64] = Infinity;
    const v13 = new Float32Array(v3);
    // v13 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
}
const v14 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "ownKeys", "getPrototypeOf", "deleteProperty", "call", "preventExtensions", "has", "set", "setPrototypeOf", "construct", "isExtensible"])
const v16 = new Proxy(v6,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

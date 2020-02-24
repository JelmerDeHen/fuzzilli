function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
const v5 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v13 = new Float32Array(v2);
    // v13 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
    v13.constructor = Int32Array;
    const v16 = v13.slice(-2847526874,234126503);
    // v16 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteOffset", "byteLength", "buffer", "length", "constructor"], withMethods: ["every", "subarray", "join", "lastIndexOf", "findIndex", "reverse", "map", "entries", "find", "keys", "set", "indexOf", "reduce", "some", "includes", "copyWithin", "sort", "slice", "forEach", "reduceRight", "values", "filter", "fill"])
    function v17(v18,v19) {
        const v21 = Math.fround(v18);
        // v21 = .number
        const v23 = v21 != 0;
        // v23 = .boolean
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "set", "getPrototypeOf", "ownKeys", "preventExtensions", "get", "call", "has", "setPrototypeOf", "isExtensible", "construct"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

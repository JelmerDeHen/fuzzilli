function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
const v5 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v13 = new Float32Array(v2);
    // v13 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
    v13.constructor = Int32Array;
    const v16 = v13.slice(-2847526874,234126503);
    // v16 = .object(ofGroup: Float32Array, withProperties: ["constructor", "byteOffset", "buffer", "length", "byteLength", "__proto__"], withMethods: ["every", "includes", "copyWithin", "entries", "forEach", "find", "filter", "some", "join", "fill", "findIndex", "reduce", "reverse", "reduceRight", "subarray", "set", "lastIndexOf", "map", "slice", "sort", "keys", "values", "indexOf"])
    function v17(v18,v19) {
        const v21 = Math.fround(v18);
        // v21 = .number
        const v23 = v21 != 0;
        // v23 = .boolean
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "getPrototypeOf", "setPrototypeOf", "isExtensible", "call", "deleteProperty", "construct", "has", "get", "ownKeys"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

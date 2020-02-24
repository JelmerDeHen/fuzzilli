function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
const v5 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v13 = new Float32Array(v2);
    // v13 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
    v13.constructor = Int32Array;
    const v16 = v13.slice(-2847526874,234126503);
    // v16 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "byteLength", "__proto__", "constructor", "buffer"], withMethods: ["filter", "set", "reduce", "sort", "slice", "values", "findIndex", "reverse", "forEach", "map", "keys", "every", "some", "subarray", "reduceRight", "includes", "join", "find", "fill", "indexOf", "entries", "copyWithin", "lastIndexOf"])
    function v17(v18,v19) {
        const v21 = Math.fround(v18);
        // v21 = .number
        const v23 = v21 != 0;
        // v23 = .boolean
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "call", "isExtensible", "deleteProperty", "preventExtensions", "setPrototypeOf", "ownKeys", "set", "construct", "getPrototypeOf", "has"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

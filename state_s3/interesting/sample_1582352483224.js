function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
const v5 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v13 = new Float32Array(v2);
    // v13 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
    v13.constructor = Int32Array;
    const v16 = v13.slice(-2847526874,234126503);
    // v16 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "buffer", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["values", "some", "slice", "fill", "forEach", "lastIndexOf", "copyWithin", "entries", "keys", "reduce", "sort", "find", "reverse", "includes", "filter", "reduceRight", "indexOf", "set", "findIndex", "subarray", "map", "join", "every"])
    function v17(v18,v19) {
        const v21 = Math.fround(v18);
        // v21 = .number
        const v23 = v21 != 0;
        // v23 = .boolean
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "deleteProperty", "setPrototypeOf", "construct", "ownKeys", "getPrototypeOf", "get", "isExtensible", "preventExtensions", "call", "has"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = new Int16Array(26640);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
        const v13 = v12.subarray();
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteLength", "byteOffset"], withMethods: ["fill", "subarray", "findIndex", "some", "lastIndexOf", "sort", "reduceRight", "includes", "slice", "copyWithin", "entries", "reduce", "reverse", "map", "join", "values", "set", "keys", "forEach", "indexOf", "find", "filter", "every"])
        let v14 = 563841718;
        const v15 = v13.lastIndexOf(v14,v8,26640);
        // v15 = .integer
        v9[1097233620] = v9;
    } catch(v16) {
    }
    return v4;
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:"search",setPrototypeOf:v5,has:v5};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["isExtensible", "set", "call", "get", "construct", "preventExtensions", "deleteProperty", "getPrototypeOf", "has", "setPrototypeOf"])
const v19 = new Proxy(v4,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

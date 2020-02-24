function main() {
const v4 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = new Int16Array(26640);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
        const v13 = v12.subarray();
        // v13 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "__proto__", "length", "byteLength", "constructor", "buffer"], withMethods: ["some", "fill", "indexOf", "map", "slice", "copyWithin", "find", "keys", "every", "set", "entries", "values", "filter", "reverse", "reduce", "findIndex", "includes", "reduceRight", "lastIndexOf", "sort", "subarray", "join", "forEach"])
        let v14 = 563841718;
        const v15 = v13.lastIndexOf(v14,v8,26640);
        // v15 = .integer
        v9[1097233620] = v9;
    } catch(v16) {
    }
    return v4;
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:"search",setPrototypeOf:v5,has:v5};
// v17 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["setPrototypeOf", "has", "call", "preventExtensions", "isExtensible", "deleteProperty", "set", "getPrototypeOf", "construct", "get"])
const v19 = new Proxy(v4,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

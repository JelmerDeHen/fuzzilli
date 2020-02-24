function main() {
const v4 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = new Int16Array(26640);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
        const v13 = v12.subarray();
        // v13 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "length", "constructor", "buffer", "__proto__", "byteLength"], withMethods: ["reduce", "every", "lastIndexOf", "fill", "sort", "includes", "filter", "entries", "map", "some", "subarray", "values", "copyWithin", "find", "findIndex", "reverse", "indexOf", "reduceRight", "join", "slice", "keys", "set", "forEach"])
        let v14 = 563841718;
        const v15 = v13.lastIndexOf(v14,v8,26640);
        // v15 = .integer
        v9[1097233620] = v9;
    } catch(v16) {
    }
    return v4;
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:"search",setPrototypeOf:v5,has:v5};
// v17 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["call", "preventExtensions", "getPrototypeOf", "construct", "setPrototypeOf", "isExtensible", "get", "deleteProperty", "set", "has"])
const v19 = new Proxy(v4,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

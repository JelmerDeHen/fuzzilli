function main() {
const v4 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = new Int16Array(26640);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
        const v13 = v12.subarray();
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "length", "constructor", "byteOffset", "byteLength", "buffer"], withMethods: ["find", "join", "fill", "entries", "subarray", "reduceRight", "map", "reverse", "set", "sort", "reduce", "keys", "indexOf", "copyWithin", "forEach", "slice", "lastIndexOf", "values", "every", "includes", "filter", "findIndex", "some"])
        let v14 = 563841718;
        const v15 = v13.lastIndexOf(v14,v8,26640);
        // v15 = .integer
        v9[1097233620] = v9;
    } catch(v16) {
    }
    return v4;
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:"search",setPrototypeOf:v5,has:v5};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["deleteProperty", "setPrototypeOf", "isExtensible", "get", "set", "construct", "preventExtensions", "call", "getPrototypeOf", "has"])
const v19 = new Proxy(v4,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

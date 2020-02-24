function main() {
const v4 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = new Int16Array(26640);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        const v13 = v12.subarray();
        // v13 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["filter", "findIndex", "lastIndexOf", "some", "fill", "find", "indexOf", "reverse", "entries", "slice", "keys", "map", "subarray", "reduce", "includes", "every", "set", "copyWithin", "sort", "forEach", "values", "join", "reduceRight"])
        let v14 = 563841718;
        const v15 = v13.lastIndexOf(v14,v8,26640);
        // v15 = .integer
        v9[1097233620] = v9;
    } catch(v16) {
    }
    return v4;
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:"search",setPrototypeOf:v5,has:v5};
// v17 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["get", "construct", "has", "set", "isExtensible", "preventExtensions", "setPrototypeOf", "deleteProperty", "call", "getPrototypeOf"])
const v19 = new Proxy(v4,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v10 = new Int16Array(26640);
        // v10 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
        const v11 = v10.subarray();
        // v11 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "length", "constructor", "buffer", "__proto__", "byteLength"], withMethods: ["reduce", "every", "lastIndexOf", "fill", "sort", "includes", "filter", "entries", "map", "some", "subarray", "values", "copyWithin", "find", "findIndex", "reverse", "indexOf", "reduceRight", "join", "slice", "keys", "set", "forEach"])
        const v13 = [1337];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v14 = v13;
        const v15 = v11.copyWithin(v14,v6,v7);
        // v15 = .undefined
    } catch(v16) {
        v4.__proto__ = v16;
    }
    return v2;
}
const v17 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getPrototypeOf", "deleteProperty", "has", "isExtensible", "preventExtensions", "construct", "ownKeys", "set", "call", "get"])
const v19 = new Proxy(v2,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

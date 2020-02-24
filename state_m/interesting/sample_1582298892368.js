function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v10 = new Int16Array(26640);
        // v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
        const v11 = v10.subarray();
        // v11 = .object(ofGroup: Int16Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "buffer", "__proto__"], withMethods: ["set", "lastIndexOf", "values", "fill", "findIndex", "indexOf", "map", "sort", "every", "some", "subarray", "includes", "join", "reverse", "find", "keys", "filter", "forEach", "reduce", "entries", "reduceRight", "slice", "copyWithin"])
        const v13 = [1337];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v14 = v13;
        const v15 = v11.copyWithin(v14,v6,26640);
        // v15 = .undefined
        v7[1097233620] = v7;
    } catch(v16) {
    }
    return v2;
}
const v17 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "set", "get", "construct", "setPrototypeOf", "deleteProperty", "ownKeys", "getPrototypeOf", "preventExtensions", "call", "isExtensible"])
const v19 = new Proxy(v2,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

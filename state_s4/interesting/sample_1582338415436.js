function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v10 = new Int16Array(26640);
        // v10 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
        const v11 = v10.subarray();
        // v11 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "__proto__", "length", "byteLength", "constructor", "buffer"], withMethods: ["some", "fill", "indexOf", "map", "slice", "copyWithin", "find", "keys", "every", "set", "entries", "values", "filter", "reverse", "reduce", "findIndex", "includes", "reduceRight", "lastIndexOf", "sort", "subarray", "join", "forEach"])
        const v13 = [1337];
        // v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v14 = v13;
        const v15 = v11.copyWithin(v14,v6,v7);
        // v15 = .undefined
    } catch(v16) {
        v4.__proto__ = v16;
    }
    return v2;
}
const v17 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "get", "deleteProperty", "setPrototypeOf", "set", "preventExtensions", "isExtensible", "call", "getPrototypeOf", "has", "construct"])
const v19 = new Proxy(v2,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

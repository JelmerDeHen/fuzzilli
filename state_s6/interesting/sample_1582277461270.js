function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v11 = [13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v13 = [1337,v11,1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v14 = {__proto__:v13,constructor:Int32Array,toString:v11,c:v11,valueOf:-1155643050};
        // v14 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "toString", "valueOf", "constructor"])
        const v16 = new Float32Array(v14);
        // v16 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
        v7[1073741824] = v7;
    } catch(v17) {
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getPrototypeOf", "construct", "deleteProperty", "preventExtensions", "get", "isExtensible", "has", "call", "ownKeys", "set"])
const v20 = new Proxy(v2,v18);
// v20 = .unknown
v20[16] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

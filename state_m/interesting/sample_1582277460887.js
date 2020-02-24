function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v11 = [13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v13 = [1337,v11,1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v14 = {__proto__:v13,constructor:Int32Array,toString:v11,c:v11,valueOf:-1155643050};
        // v14 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "toString", "constructor"])
        const v16 = new Float32Array(v14);
        // v16 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
        v7[1073741824] = v7;
    } catch(v17) {
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "has", "isExtensible", "setPrototypeOf", "preventExtensions", "call", "get", "set", "getPrototypeOf", "construct"])
const v20 = new Proxy(v2,v18);
// v20 = .unknown
v20[16] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

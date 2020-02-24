function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v12 = new Int16Array(19873);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        v12.length = 19873;
        const v16 = [1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v17 = {b:13.37,d:1607264097,e:1607264097,constructor:v16,valueOf:WeakSet};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b", "e", "valueOf", "d"])
    } catch(v18) {
    }
}
const v19 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "ownKeys", "getPrototypeOf", "get", "call", "set", "deleteProperty", "setPrototypeOf", "construct", "has", "preventExtensions"])
const v21 = new Proxy(v2,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

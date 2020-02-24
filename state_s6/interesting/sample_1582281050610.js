function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v12 = [13.37,13.37,-4294967297,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v13 = "boolean".indexOf(v12,-4294967297);
        // v13 = .integer
        const v18 = [1337,1337];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v19 = {b:13.37,d:1607264097,e:1607264097,constructor:v18,valueOf:WeakSet};
        // v19 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "e", "valueOf", "d"])
        v8[3] = v8;
        const v20 = v6();
        // v20 = .unknown
        const v21 = v20[-2900725722];
        // v21 = .unknown
    } catch(v22) {
        const v23 = RegExp(v22);
        // v23 = .object()
    }
}
const v24 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "preventExtensions", "get", "setPrototypeOf", "getPrototypeOf", "deleteProperty", "call", "construct", "ownKeys", "isExtensible", "set"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

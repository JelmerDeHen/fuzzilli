function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v12 = [13.37,13.37,-4294967297,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v13 = "boolean".indexOf(v12,-4294967297);
        // v13 = .integer
        const v18 = [1337,1337];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v19 = {b:13.37,d:1607264097,e:1607264097,constructor:v18,valueOf:WeakSet};
        // v19 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "e", "d", "valueOf"])
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
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "get", "preventExtensions", "ownKeys", "call", "getPrototypeOf", "deleteProperty", "construct", "isExtensible", "set", "has"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

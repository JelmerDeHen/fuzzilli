function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,v3,-61354574,WeakSet];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = v4.fill(v11,1337,v10);
        // v14 = .undefined
        const v15 = v12 << v14;
        // v15 = .integer
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "isExtensible", "ownKeys", "construct", "get", "setPrototypeOf", "getPrototypeOf", "has", "call", "deleteProperty"])
const v19 = new Proxy(v7,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = {d:"split",constructor:-2621064164,a:eval,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor"], withMethods: ["a"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v15 = [13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    try {
        const v19 = [13.37,13.37,13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v20 = (0)(v19);
        // v20 = .unknown
    } catch(v21) {
        const v22 = {__proto__:v21,...v21,...v21,...13.37};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__"])
    }
}
const v23 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "ownKeys", "has", "set", "deleteProperty", "isExtensible", "getPrototypeOf", "construct", "call", "get", "setPrototypeOf"])
const v25 = new Proxy(v7,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

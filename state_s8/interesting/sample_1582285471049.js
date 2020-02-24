function main() {
const v4 = {d:"split",constructor:-2621064164,a:eval,__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__"], withMethods: ["a"])
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v15 = [13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    try {
        const v19 = [13.37,13.37,13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v20 = (0)(v19);
        // v20 = .unknown
    } catch(v21) {
        const v22 = {__proto__:v21,...v21,...v21,...13.37};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__"])
    }
}
const v23 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "call", "isExtensible", "ownKeys", "construct", "getPrototypeOf", "setPrototypeOf", "get", "set", "deleteProperty", "has"])
const v25 = new Proxy(v7,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

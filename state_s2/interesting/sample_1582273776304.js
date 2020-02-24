function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v11) {
        const v17 = Math.hypot(-1970853828,13.37,1337,DataView);
        // v17 = .number
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "preventExtensions", "set", "construct", "isExtensible", "setPrototypeOf", "call", "getPrototypeOf", "get", "has", "deleteProperty"])
const v20 = new Proxy(v2,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

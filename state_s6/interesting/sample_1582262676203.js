function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
    }
}
const v9 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "get", "has", "preventExtensions", "construct", "call", "set", "setPrototypeOf", "isExtensible", "ownKeys", "deleteProperty"])
const v11 = new Proxy(v2,v9);
// v11 = .unknown
v11[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

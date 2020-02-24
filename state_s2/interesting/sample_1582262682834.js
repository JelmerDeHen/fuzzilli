function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
    }
}
const v9 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "get", "construct", "deleteProperty", "getPrototypeOf", "isExtensible", "preventExtensions", "ownKeys", "has", "set", "call"])
const v11 = new Proxy(v2,v9);
// v11 = .unknown
v11[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

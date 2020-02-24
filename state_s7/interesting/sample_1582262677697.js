function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
    }
}
const v9 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "isExtensible", "deleteProperty", "has", "get", "getPrototypeOf", "construct", "ownKeys", "set", "preventExtensions", "setPrototypeOf"])
const v11 = new Proxy(v2,v9);
// v11 = .unknown
v11[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

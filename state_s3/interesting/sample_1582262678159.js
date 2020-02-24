function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
    }
}
const v9 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "call", "preventExtensions", "setPrototypeOf", "isExtensible", "deleteProperty", "set", "has", "get", "ownKeys", "getPrototypeOf"])
const v11 = new Proxy(v2,v9);
// v11 = .unknown
v11[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

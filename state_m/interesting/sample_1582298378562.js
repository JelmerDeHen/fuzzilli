function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = Object.getOwnPropertyDescriptors(v8);
        // v10 = .object()
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:8,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["has", "preventExtensions", "get", "ownKeys", "construct", "set", "getPrototypeOf", "call", "deleteProperty", "setPrototypeOf"])
const v14 = new Proxy(v3,v12);
// v14 = .unknown
v14[1337] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

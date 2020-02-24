function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
    }
}
const v9 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "ownKeys", "construct", "setPrototypeOf", "has", "getPrototypeOf", "set", "preventExtensions", "deleteProperty", "isExtensible", "call"])
const v11 = new Proxy(v2,v9);
// v11 = .unknown
v11[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

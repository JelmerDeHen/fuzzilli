function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = Object.isFrozen(v7);
        // v9 = .boolean
    } catch(v10) {
    }
}
const v11 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "setPrototypeOf", "deleteProperty", "call", "ownKeys", "has", "isExtensible", "getPrototypeOf", "preventExtensions", "set", "construct"])
const v13 = new Proxy(v2,v11);
// v13 = .unknown
v13[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

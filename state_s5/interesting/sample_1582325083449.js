function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = Object.isFrozen(v7);
        // v9 = .boolean
    } catch(v10) {
    }
}
const v11 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "get", "isExtensible", "setPrototypeOf", "deleteProperty", "call", "has", "set", "ownKeys", "getPrototypeOf", "preventExtensions"])
const v13 = new Proxy(v2,v11);
// v13 = .unknown
v13[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

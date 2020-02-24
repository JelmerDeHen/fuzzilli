function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v11 = Object.isFrozen(v9);
        // v11 = .boolean
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v1,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v13 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["preventExtensions", "call", "get", "ownKeys", "construct", "setPrototypeOf", "set", "deleteProperty", "has", "getPrototypeOf"])
const v15 = new Proxy(v4,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

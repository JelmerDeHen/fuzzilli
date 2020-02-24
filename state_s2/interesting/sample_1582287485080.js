function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        const v10 = Symbol(v9);
        // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    }
}
const v11 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "construct", "preventExtensions", "call", "isExtensible", "deleteProperty", "get", "ownKeys", "setPrototypeOf", "has", "set"])
const v13 = new Proxy(v3,v11);
// v13 = .unknown
v13[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

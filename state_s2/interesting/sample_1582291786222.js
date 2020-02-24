function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = [225767.91401537857];
        // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v11 = Object.seal(v9);
        // v11 = .object()
        v9.length = 0;
    } catch(v13) {
    }
}
const v14 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "get", "getPrototypeOf", "setPrototypeOf", "construct", "deleteProperty", "preventExtensions", "ownKeys", "call", "set", "has"])
const v16 = new Proxy(v2,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

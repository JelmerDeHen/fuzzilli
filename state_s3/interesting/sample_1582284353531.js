function main() {
const v2 = {d:1337};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = [1337,1337,v2,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = "function".includes(v10,v9);
        // v11 = .boolean
    } catch(v12) {
    }
    return v7;
}
const v13 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "get", "preventExtensions", "deleteProperty", "call", "getPrototypeOf", "ownKeys", "has", "construct", "isExtensible", "set"])
const v15 = new Proxy(v5,v13);
// v15 = .unknown
v15[-2923725353] = "boolean";
}
%NeverOptimizeFunction(main);
main();

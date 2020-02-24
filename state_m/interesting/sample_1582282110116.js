function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = "function".includes(v10,1337);
        // v11 = .boolean
    } catch(v12) {
    }
    return v2;
}
const v13 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "preventExtensions", "call", "set", "deleteProperty", "has", "isExtensible", "getPrototypeOf", "ownKeys", "construct", "get"])
const v15 = new Proxy(v5,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = Object.getOwnPropertySymbols(v8);
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:8,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v12 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["set", "deleteProperty", "preventExtensions", "has", "construct", "get", "setPrototypeOf", "call", "ownKeys", "getPrototypeOf"])
const v14 = new Proxy(v3,v12);
// v14 = .unknown
v14[1337] = "MIN_VALUE";
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();

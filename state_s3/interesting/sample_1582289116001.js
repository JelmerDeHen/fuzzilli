function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = Object.getOwnPropertySymbols(v8);
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:8,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v12 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["call", "get", "getPrototypeOf", "ownKeys", "set", "has", "construct", "deleteProperty", "preventExtensions", "setPrototypeOf"])
const v14 = new Proxy(v3,v12);
// v14 = .unknown
v14[1337] = "MIN_VALUE";
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();

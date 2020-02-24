function main() {
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v14 = Object.defineProperty(this,1337,v11);
        // v14 = .undefined
    } catch(v15) {
    }
    return v7;
}
const v16 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "ownKeys", "get", "deleteProperty", "getPrototypeOf", "isExtensible", "call", "preventExtensions", "set", "setPrototypeOf"])
const v18 = new Proxy(v6,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

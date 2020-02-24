function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = Object.freeze(v8);
        // v10 = .undefined
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:8,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v3,has:v4};
// v12 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "setPrototypeOf"], withMethods: ["set", "get", "has", "getPrototypeOf", "construct", "ownKeys", "deleteProperty", "preventExtensions", "call"])
const v14 = new Proxy(v3,v12);
// v14 = .unknown
v14[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

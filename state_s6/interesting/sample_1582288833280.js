function main() {
const v1 = {valueOf:13.37,a:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = Object.freeze(v10);
        // v12 = .undefined
    } catch(v13) {
    }
    return v1;
}
const v14 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:8,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v14 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["preventExtensions", "call", "has", "get", "set", "ownKeys", "deleteProperty", "setPrototypeOf", "getPrototypeOf", "construct"])
const v16 = new Proxy(v5,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

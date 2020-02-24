function main() {
const v1 = {valueOf:13.37,a:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
// v14 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["deleteProperty", "get", "ownKeys", "call", "has", "set", "construct", "getPrototypeOf", "setPrototypeOf", "preventExtensions"])
const v16 = new Proxy(v5,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

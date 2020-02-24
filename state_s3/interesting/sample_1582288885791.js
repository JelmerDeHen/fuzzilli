function main() {
const v1 = {valueOf:13.37,a:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["setPrototypeOf", "deleteProperty", "ownKeys", "has", "construct", "set", "preventExtensions", "get", "call", "getPrototypeOf"])
const v16 = new Proxy(v5,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

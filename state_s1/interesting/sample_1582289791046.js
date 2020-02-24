function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = Object.freeze(v8);
        // v10 = .undefined
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:8,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v3,has:v4};
// v12 = .object(ofGroup: Object, withProperties: ["isExtensible", "setPrototypeOf", "__proto__"], withMethods: ["deleteProperty", "ownKeys", "getPrototypeOf", "get", "has", "construct", "preventExtensions", "set", "call"])
const v14 = new Proxy(v3,v12);
// v14 = .unknown
v14[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

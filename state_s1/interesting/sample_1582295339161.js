function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v11 = Object.isFrozen(v9);
        // v11 = .boolean
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v1,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v13 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["ownKeys", "set", "construct", "setPrototypeOf", "get", "deleteProperty", "getPrototypeOf", "has", "preventExtensions", "call"])
const v15 = new Proxy(v4,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v11 = Object.isFrozen(v9);
        // v11 = .boolean
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v1,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v13 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["deleteProperty", "preventExtensions", "getPrototypeOf", "has", "get", "set", "setPrototypeOf", "ownKeys", "construct", "call"])
const v15 = new Proxy(v4,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

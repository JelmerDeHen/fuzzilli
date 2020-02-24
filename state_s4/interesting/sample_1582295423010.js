function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v11 = Object.isFrozen(v9);
        // v11 = .boolean
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v1,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["construct", "ownKeys", "preventExtensions", "getPrototypeOf", "call", "setPrototypeOf", "has", "get", "set", "deleteProperty"])
const v15 = new Proxy(v4,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

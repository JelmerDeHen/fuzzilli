function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v12 = [13.37,13.37,13.37,v9];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v13 = new Set(v12);
    // v13 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["add", "clear", "keys", "values", "entries", "delete", "forEach", "has"])
    return v1;
}
const v14 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "ownKeys", "set", "get", "has", "isExtensible", "setPrototypeOf", "deleteProperty", "preventExtensions", "getPrototypeOf", "call"])
const v16 = new Proxy(v4,v14);
// v16 = .unknown
v16[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

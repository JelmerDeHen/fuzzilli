function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8,v9,v10) {
    'use strict'
    return v7;
}
const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v3,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,__proto__:v6,has:v6};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions"], withMethods: ["getPrototypeOf", "call", "set", "isExtensible", "ownKeys", "construct", "get", "deleteProperty", "__proto__", "has"])
const v13 = new Proxy(v5,v11);
// v13 = .unknown
const v14 = String.raw(v13,parseFloat,String);
// v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

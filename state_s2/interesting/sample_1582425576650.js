function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    return v7;
}
const v11 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v3,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,__proto__:v6,has:v6};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions"], withMethods: ["deleteProperty", "get", "getPrototypeOf", "isExtensible", "set", "has", "call", "__proto__", "ownKeys", "construct"])
const v13 = new Proxy(v5,v11);
// v13 = .unknown
const v14 = String.raw(v13,"L91XDTI/EP",String);
// v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
%NeverOptimizeFunction(main);
main();

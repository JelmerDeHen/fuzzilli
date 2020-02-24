function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v12 = [];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v13 = {toString:1073741824,e:Function,b:v12,valueOf:Function,a:v11,constructor:Function};
    // v13 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "a", "constructor", "__proto__", "b", "e"])
    const v17 = {isExtensible:2291304804,apply:v13,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
    // v17 = .object(ofGroup: Object, withProperties: ["isExtensible", "preventExtensions", "__proto__", "ownKeys", "getOwnPropertyDescriptor", "deleteProperty", "apply"])
    const v19 = new Number(v11,v17);
    // v19 = .number
    const v20 = JSON.stringify(1337,v19,v19);
    // v20 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
const v21 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "deleteProperty", "ownKeys", "set", "setPrototypeOf", "construct", "call", "get", "preventExtensions", "isExtensible", "getPrototypeOf"])
const v23 = new Proxy(v3,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

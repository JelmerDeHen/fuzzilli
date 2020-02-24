function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v12 = [];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v13 = {toString:1073741824,e:Function,b:v12,valueOf:Function,a:v11,constructor:Function};
    // v13 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "a", "b", "e", "constructor"])
    const v17 = {isExtensible:2291304804,apply:v13,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
    // v17 = .object(ofGroup: Object, withProperties: ["preventExtensions", "isExtensible", "apply", "ownKeys", "__proto__", "getOwnPropertyDescriptor", "deleteProperty"])
    const v19 = new Number(v11,v17);
    // v19 = .number
    const v20 = JSON.stringify(1337,v19,v19);
    // v20 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
const v21 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "setPrototypeOf", "ownKeys", "deleteProperty", "getPrototypeOf", "call", "construct", "set", "get", "has"])
const v23 = new Proxy(v3,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

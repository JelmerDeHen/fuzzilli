function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v14 = [13.37,13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v15 = v14.toString();
    // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v18 = [13.37,13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v21 = Symbol.e;
    // v21 = .unknown
    const v22 = Symbol[v21];
    // v22 = .unknown
    const v23 = {getPrototypeOf:v22,get:v22};
    // v23 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
    const v25 = new Proxy(Reflect,v23);
    // v25 = .unknown
    Object.__proto__ = v25;
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v33 = {b:v18,c:v12,valueOf:-9007199254740993,d:v15,constructor:1337,__proto__:v32};
    // v33 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "c", "b", "d"])
    let v34 = v33;
    const v37 = new Proxy(v34,Object);
    // v37 = .unknown
    const v38 = Object.freeze(v37);
    // v38 = .undefined
}
const v39 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:1337,has:v4};
// v39 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["get", "isExtensible", "has", "getPrototypeOf", "set", "call", "deleteProperty", "ownKeys", "construct", "preventExtensions"])
const v41 = new Proxy(v3,v39);
// v41 = .unknown
v41[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

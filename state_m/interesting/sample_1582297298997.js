function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [Proxy,2147483647,v4,"matchAll"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {a:"matchAll",constructor:v4,__proto__:v6,valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "valueOf"])
let v9 = v8;
const v11 = {defineProperty:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,set:gc,apply:gc,deleteProperty:gc,preventExtensions:gc,getPrototypeOf:gc,isExtensible:gc,has:gc,call:gc};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "apply", "call", "set", "getOwnPropertyDescriptor", "deleteProperty", "isExtensible", "preventExtensions", "ownKeys", "has", "defineProperty"])
const v13 = new Proxy(gc,v11);
// v13 = .unknown
const v15 = [1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v17 = DataView;
let v18 = v17;
const v23 = [1337,1337,1337,1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v24(v25,v26,v27,v28) {
    'use strict'
    const v31 = Symbol.e;
    // v31 = .unknown
    const v32 = Symbol[v31];
    // v32 = .unknown
    const v33 = {__proto__:v32,get:v32};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v35 = new Proxy(Reflect,v33);
    // v35 = .unknown
    Object.__proto__ = v35;
}
const v37 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:1337,has:v17};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "has"], withMethods: ["call", "deleteProperty", "preventExtensions", "get", "construct", "set", "getPrototypeOf", "isExtensible", "ownKeys"])
const v39 = new Proxy(v23,v37);
// v39 = .unknown
v39[1] = "MIN_VALUE";
const v40 = new Proxy(v18,Object);
// v40 = .unknown
const v41 = {a:v9,e:"MIN_VALUE",length:v8,__proto__:v18,c:v15,d:v13,b:v40,...v40,...Proxy};
// v41 = .object(ofGroup: Object, withProperties: ["b", "d", "a", "c", "length", "__proto__", "e"])
}
%NeverOptimizeFunction(main);
main();

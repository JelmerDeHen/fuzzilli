function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [Proxy,2147483647,v4,"matchAll"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:"matchAll",constructor:v4,__proto__:v6,valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "a"])
let v9 = v8;
const v11 = {defineProperty:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,set:gc,apply:gc,deleteProperty:gc,preventExtensions:gc,getPrototypeOf:gc,isExtensible:gc,has:gc,call:gc};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "apply", "getPrototypeOf", "call", "deleteProperty", "set", "isExtensible", "defineProperty", "has", "getOwnPropertyDescriptor", "ownKeys"])
const v14 = {__proto__:536870912};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v17 = 0;
let v21 = 0;
let v31 = 0;
const v33 = {__proto__:536870912};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v37 = 0;
let v42 = 0;
let v51 = 0;
let v54 = 0;
const v56 = {__proto__:536870912};
// v56 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v60 = 0;
let v65 = 0;
let v68 = 0;
let v73 = 0;
const v75 = new Proxy(gc,v11);
// v75 = .unknown
const v77 = [1337,1337];
// v77 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v79 = Array;
let v80 = v79;
const v85 = [1337,1337,1337,1337,1337];
// v85 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v86(v87,v88,v89,v90) {
    'use strict'
    const v93 = Symbol.e;
    // v93 = .unknown
    const v94 = Symbol[v93];
    // v94 = .unknown
    const v95 = {__proto__:v94,get:v94};
    // v95 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v97 = new Proxy(Reflect,v95);
    // v97 = .unknown
    Object.__proto__ = v97;
}
const v99 = {deleteProperty:v86,set:v86,getPrototypeOf:v86,call:v86,preventExtensions:v86,isExtensible:v86,construct:v86,get:v86,ownKeys:v86,setPrototypeOf:1337,has:v79};
// v99 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["getPrototypeOf", "isExtensible", "deleteProperty", "construct", "set", "get", "has", "call", "ownKeys", "preventExtensions"])
const v101 = new Proxy(v85,v99);
// v101 = .unknown
v101[1] = "MIN_VALUE";
const v102 = new Proxy(v80,Object);
// v102 = .unknown
const v103 = {a:v9,e:"MIN_VALUE",length:v8,__proto__:v80,c:v77,d:v75,b:v102,...v102,...Proxy};
// v103 = .object(ofGroup: Object, withProperties: ["e", "length", "c", "d", "b", "a", "__proto__"], withMethods: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
function main() {
let v1 = RegExp;
let v2 = v1;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v15 = Symbol.e;
    // v15 = .unknown
    const v16 = Symbol[v15];
    // v16 = .unknown
    const v17 = {getPrototypeOf:v16,get:v16};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
    const v19 = new Proxy(Reflect,v17);
    // v19 = .unknown
    Object.__proto__ = v19;
}
const v21 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:1337,has:v8};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["deleteProperty", "has", "call", "isExtensible", "ownKeys", "getPrototypeOf", "preventExtensions", "set", "construct", "get"])
const v23 = new Proxy(v7,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
const v24 = new Proxy(v2,Object);
// v24 = .unknown
const v25 = Object.freeze(v24);
// v25 = .undefined
for (const v26 in v24) {
}
}
%NeverOptimizeFunction(main);
main();

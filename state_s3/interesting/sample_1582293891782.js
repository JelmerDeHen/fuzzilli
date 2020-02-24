function main() {
let v1 = RegExp;
let v2 = v1;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v15 = Symbol.e;
    // v15 = .unknown
    const v16 = Symbol[v15];
    // v16 = .unknown
    const v17 = {getPrototypeOf:v16,get:v16};
    // v17 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
    const v19 = new Proxy(Reflect,v17);
    // v19 = .unknown
    Object.__proto__ = v19;
}
const v21 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:1337,has:v8};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["call", "set", "get", "isExtensible", "getPrototypeOf", "construct", "deleteProperty", "ownKeys", "preventExtensions", "has"])
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

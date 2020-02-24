function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4,v5,v6) {
    'use strict'
}
const v7 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:1337,has:v2};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["construct", "set", "isExtensible", "getPrototypeOf", "call", "deleteProperty", "get", "preventExtensions", "ownKeys", "has"])
const v9 = new Proxy(v1,v7);
// v9 = .unknown
let v11 = this;
let v12 = v11;
const v15 = new Proxy(v12,Object);
// v15 = .unknown
const v16 = v11[0];
// v16 = .unknown
const v17 = v2();
// v17 = .unknown
const v18 = {has:v9,setPrototypeOf:v2,call:Object,ownKeys:v15,isExtensible:v17,preventExtensions:v2,defineProperty:v16,deleteProperty:v9,construct:v17,set:v17};
// v18 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__", "deleteProperty", "set", "has", "defineProperty", "isExtensible", "construct"], withMethods: ["call", "preventExtensions", "setPrototypeOf"])
const v20 = new Proxy(v15,v18);
// v20 = .unknown
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v26 = Symbol(v20);
// v26 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();

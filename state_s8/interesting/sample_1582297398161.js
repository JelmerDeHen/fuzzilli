function main() {
let v1 = RegExp;
let v2 = v1;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v16 = {get:v8};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v18 = Object.defineProperty(v2,1337,v16);
    // v18 = .undefined
    const v22 = Symbol.e;
    // v22 = .unknown
    const v23 = Symbol[v22];
    // v23 = .unknown
    const v24 = {getPrototypeOf:v23,get:v23};
    // v24 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
    const v26 = new Proxy(Reflect,v24);
    // v26 = .unknown
    Object.__proto__ = v26;
}
const v28 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:1337,has:v8};
// v28 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["construct", "call", "getPrototypeOf", "preventExtensions", "has", "deleteProperty", "ownKeys", "get", "set", "isExtensible"])
const v30 = new Proxy(v7,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
const v31 = new Proxy(v2,Object);
// v31 = .unknown
for (const v32 in v31) {
}
}
%NeverOptimizeFunction(main);
main();

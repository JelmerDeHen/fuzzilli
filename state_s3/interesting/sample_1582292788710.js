function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = parseInt.e;
    // v10 = .unknown
    const v11 = parseInt[v10];
    // v11 = .unknown
    const v12 = {getPrototypeOf:v11,get:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
    const v14 = new Proxy(Reflect,v12);
    // v14 = .unknown
    Object.__proto__ = v14;
}
const v16 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v16 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["call", "deleteProperty", "has", "getPrototypeOf", "get", "construct", "ownKeys", "isExtensible", "preventExtensions", "set"])
const v18 = new Proxy(v2,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
let v20 = this;
let v21 = v20;
const v24 = new Proxy(v21,Object);
// v24 = .unknown
const v25 = Object.get(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();

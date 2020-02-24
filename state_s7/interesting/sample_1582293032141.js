function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = parseInt.e;
    // v10 = .unknown
    const v11 = parseInt[v10];
    // v11 = .unknown
    const v12 = {getPrototypeOf:v11,get:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
    const v14 = new Proxy(Reflect,v12);
    // v14 = .unknown
    Object.__proto__ = v14;
}
const v16 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v16 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["has", "get", "ownKeys", "isExtensible", "set", "call", "deleteProperty", "getPrototypeOf", "preventExtensions", "construct"])
const v18 = new Proxy(v2,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
let v20 = this;
let v21 = v20;
const v24 = new Proxy(v21,Object);
// v24 = .unknown
const v26 = Symbol.species;
// v26 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v24[v26] = v3;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = parseInt.e;
    // v10 = .unknown
    const v11 = parseInt[v10];
    // v11 = .unknown
    const v12 = {getPrototypeOf:v11,get:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
    const v14 = new Proxy(Reflect,v12);
    // v14 = .unknown
    Object.__proto__ = v14;
}
const v16 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["set", "preventExtensions", "isExtensible", "construct", "has", "getPrototypeOf", "get", "deleteProperty", "call", "ownKeys"])
const v18 = new Proxy(v2,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
let v20 = this;
let v21 = v20;
const v24 = new Proxy(v21,Object);
// v24 = .unknown
const v26 = Symbol.species;
// v26 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v24[v26] = v3;
}
%NeverOptimizeFunction(main);
main();

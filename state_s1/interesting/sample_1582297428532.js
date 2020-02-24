function main() {
const v2 = new Float64Array(6992);
// v2 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
let v4 = DataView;
let v5 = v2;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v11(v12,v13,v14,v15) {
    'use strict'
    const v18 = Symbol.e;
    // v18 = .unknown
    const v19 = Symbol[v18];
    // v19 = .unknown
    const v20 = {__proto__:v19,get:v19};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v22 = new Proxy(Reflect,v20);
    // v22 = .unknown
    Object.__proto__ = v22;
}
const v24 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:1337,has:v4};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "has"], withMethods: ["getPrototypeOf", "construct", "call", "get", "set", "ownKeys", "preventExtensions", "isExtensible", "deleteProperty"])
const v26 = new Proxy(v10,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
const v27 = new Proxy(v5,Object);
// v27 = .unknown
for (const v28 in v27) {
}
}
%NeverOptimizeFunction(main);
main();

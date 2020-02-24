function main() {
const v2 = new Float64Array(6992);
// v2 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
let v4 = DataView;
let v5 = v2;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v24 = .object(ofGroup: Object, withProperties: ["has", "setPrototypeOf", "__proto__"], withMethods: ["ownKeys", "isExtensible", "construct", "get", "set", "deleteProperty", "preventExtensions", "getPrototypeOf", "call"])
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

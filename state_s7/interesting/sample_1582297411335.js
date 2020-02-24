function main() {
const v2 = new Float64Array(6992);
// v2 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
let v4 = DataView;
let v5 = v2;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v24 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "setPrototypeOf"], withMethods: ["construct", "isExtensible", "deleteProperty", "get", "call", "set", "ownKeys", "preventExtensions", "getPrototypeOf"])
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

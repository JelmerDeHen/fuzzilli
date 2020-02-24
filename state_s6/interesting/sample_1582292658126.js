function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v8 = v4.slice(1024,1337);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v9 = 1337;
    const v10 = new Float64Array(v8,127,v9);
    // v10 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
} catch(v11) {
}
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v14(v15,v16,v17,v18) {
    'use strict'
}
const v19 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:2,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["call", "construct", "preventExtensions", "ownKeys", "getPrototypeOf", "has", "get", "deleteProperty", "setPrototypeOf", "set"])
const v21 = new Proxy(v13,v19);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

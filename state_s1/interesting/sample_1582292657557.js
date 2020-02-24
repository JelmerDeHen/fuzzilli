function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v8 = v4.slice(1024,1337);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v9 = 1337;
    const v10 = new Float64Array(v8,127,v9);
    // v10 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
} catch(v11) {
}
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v14(v15,v16,v17,v18) {
    'use strict'
}
const v19 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:2,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v19 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["call", "preventExtensions", "getPrototypeOf", "setPrototypeOf", "set", "has", "ownKeys", "get", "construct", "deleteProperty"])
const v21 = new Proxy(v13,v19);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

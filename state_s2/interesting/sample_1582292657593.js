function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v8 = v4.slice(1024,1337);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v9 = 1337;
    const v10 = new Float64Array(v8,127,v9);
    // v10 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
} catch(v11) {
}
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v14(v15,v16,v17,v18) {
    'use strict'
}
const v19 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:2,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["setPrototypeOf", "ownKeys", "has", "set", "preventExtensions", "get", "construct", "call", "getPrototypeOf", "deleteProperty"])
const v21 = new Proxy(v13,v19);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

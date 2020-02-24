function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v8 = v4.slice(1024,1337);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v9 = 1337;
    const v10 = new Float64Array(v8,127,v9);
    // v10 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
} catch(v11) {
}
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v14(v15,v16,v17,v18) {
    'use strict'
}
const v19 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:2,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["deleteProperty", "call", "getPrototypeOf", "preventExtensions", "ownKeys", "set", "construct", "has", "setPrototypeOf", "get"])
const v21 = new Proxy(v13,v19);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

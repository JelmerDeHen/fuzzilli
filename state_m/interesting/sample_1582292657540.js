function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v8 = v4.slice(1024,1337);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v9 = 1337;
    const v10 = new Float64Array(v8,127,v9);
    // v10 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
} catch(v11) {
}
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v14(v15,v16,v17,v18) {
    'use strict'
}
const v19 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:2,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v19 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["ownKeys", "getPrototypeOf", "setPrototypeOf", "deleteProperty", "call", "construct", "set", "get", "has", "preventExtensions"])
const v21 = new Proxy(v13,v19);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

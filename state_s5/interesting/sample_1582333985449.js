function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = [1337,1337];
        // v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v13 = new ArrayBuffer(1337);
        // v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        const v16 = v13.slice(1024,1337);
        // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        let v17 = v7;
        const v18 = new DataView(v16,v9,v17);
        // v18 = .object(ofGroup: DataView, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer"], withMethods: ["getUint8", "setUint8", "setInt16", "setUint16", "getUint32", "setFloat32", "getInt8", "setFloat64", "getInt32", "setInt8", "getFloat32", "setInt32", "setUint32", "getInt16", "getUint16", "getFloat64"])
    } catch(v19) {
    }
}
const v20 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "call", "get", "preventExtensions", "deleteProperty", "getPrototypeOf", "ownKeys", "set", "isExtensible", "construct", "has"])
const v22 = new Proxy(v2,v20);
// v22 = .unknown
const v26 = v3(v22,1,v22,Infinity);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {valueOf:v1,__proto__:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = [1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v16 = new ArrayBuffer(1337);
        // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        const v19 = v16.slice(1024,1337);
        // v19 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
        let v20 = v10;
        const v21 = new DataView(v19,v12,v20);
        // v21 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
        const v22 = v2();
        // v22 = .unknown
        const v23 = v22[-2900725722];
        // v23 = .unknown
    } catch(v24) {
    }
}
const v25 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "construct", "get", "deleteProperty", "ownKeys", "isExtensible", "getPrototypeOf", "set", "setPrototypeOf", "preventExtensions", "has"])
const v27 = new Proxy(v5,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

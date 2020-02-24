function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v4(v5,v6,v7,v8) {
    'use strict'
    let v11 = 0;
    while (v11 < 1337) {
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
        const v13 = arguments[1337];
        // v13 = .unknown
        const v14 = arguments[1337];
        // v14 = .unknown
        const v17 = new Int8Array(64);
        // v17 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
    }
}
const v18 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "setPrototypeOf", "set", "get", "preventExtensions", "call", "has", "ownKeys", "isExtensible", "construct", "getPrototypeOf"])
const v20 = new Proxy(v3,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
v20.b = v18;
}
%NeverOptimizeFunction(main);
main();

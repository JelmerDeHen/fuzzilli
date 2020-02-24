function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
    }
    const v10 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "ownKeys", "isExtensible", "get", "getPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor", "construct", "set", "defineProperty", "preventExtensions"])
    const v12 = new ArrayBuffer(gc,v10);
    // v12 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
}
const v13 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "getPrototypeOf", "preventExtensions", "has", "setPrototypeOf", "set", "ownKeys", "isExtensible", "deleteProperty", "construct"])
const v15 = new Proxy(v2,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = new Uint16Array(51687);
    // v10 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
    for (const v12 in "boolean") {
        const v14 = (1337).constructor;
        // v14 = .unknown
        const v15 = {set:v14,a:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "a"])
        const v17 = Object.seal(v10,v12,v15);
        // v17 = .object()
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,c:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "construct", "ownKeys", "get", "has", "isExtensible", "getPrototypeOf", "preventExtensions", "c", "set", "setPrototypeOf"])
let v22 = 0;
const v23 = new Proxy(v2,v18);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

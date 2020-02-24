function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = new Uint16Array(51687);
    // v10 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
    for (const v12 in "boolean") {
        const v14 = (1337).constructor;
        // v14 = .unknown
        const v15 = {set:v14,a:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "set"])
        const v17 = Object.seal(v10,v12,v15);
        // v17 = .object()
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,c:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "construct", "deleteProperty", "has", "setPrototypeOf", "preventExtensions", "set", "get", "ownKeys", "getPrototypeOf", "c"])
let v22 = 0;
const v23 = new Proxy(v2,v18);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

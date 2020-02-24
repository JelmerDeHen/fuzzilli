function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = new Uint16Array(51687);
    // v10 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
    for (const v12 in "boolean") {
        const v14 = (1337).constructor;
        // v14 = .unknown
        const v15 = {set:v14,a:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "set", "a"])
        const v17 = Object.seal(v10,v12,v15);
        // v17 = .object()
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,c:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "get", "construct", "setPrototypeOf", "has", "deleteProperty", "c", "isExtensible", "ownKeys", "set", "preventExtensions"])
let v22 = 0;
const v23 = new Proxy(v2,v18);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

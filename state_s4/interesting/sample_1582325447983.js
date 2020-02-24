function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = new Uint16Array(51687);
    // v10 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
    for (const v12 in "boolean") {
        const v14 = (1337).constructor;
        // v14 = .unknown
        const v15 = {set:v14,a:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["set", "a", "__proto__"])
        const v17 = Object.seal(v10,v12,v15);
        // v17 = .object()
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,c:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "ownKeys", "isExtensible", "construct", "preventExtensions", "getPrototypeOf", "c", "has", "set", "deleteProperty", "setPrototypeOf"])
let v22 = 0;
const v23 = new Proxy(v2,v18);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

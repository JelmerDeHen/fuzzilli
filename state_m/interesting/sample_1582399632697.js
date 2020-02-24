function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v7(v8,v9,v10,v11) {
    'use strict'
    let v14 = 0;
    const v15 = v14 in arguments;
    // v15 = .boolean
    let v18 = 0;
    while (v18 < 1337) {
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
        let v21 = 0;
        for (const v22 in v21) {
        }
        const v25 = new Float64Array(128);
        // v25 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
    }
}
const v26 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "preventExtensions", "isExtensible", "getPrototypeOf", "setPrototypeOf", "ownKeys", "set", "has", "call", "construct", "deleteProperty"])
const v28 = new Proxy(v6,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
v28.b = v26;
}
%NeverOptimizeFunction(main);
main();

function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
        // v25 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
    }
}
const v26 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "getPrototypeOf", "get", "isExtensible", "set", "preventExtensions", "deleteProperty", "ownKeys", "construct", "setPrototypeOf", "call"])
const v28 = new Proxy(v6,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
v28.b = v26;
}
%NeverOptimizeFunction(main);
main();

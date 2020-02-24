function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = new Uint16Array(127);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
const v9 = v6.slice(-2538985663,1337);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["reduce", "lastIndexOf", "includes", "keys", "subarray", "some", "join", "slice", "filter", "copyWithin", "findIndex", "find", "map", "reduceRight", "every", "sort", "entries", "set", "reverse", "forEach", "values", "fill", "indexOf"])
function v10(v11,v12,v13,v14) {
    'use strict'
    let v17 = 0;
    let v20 = -128;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    while (v17 < 1337) {
        const v22 = v17 + 1;
        // v22 = .primitive
        v17 = v22;
        let v24 = 0;
        const v25 = arguments[1337];
        // v25 = .unknown
        v24 = v11;
        for (const v26 in v9) {
            const v27 = arguments[1087792456];
            // v27 = .unknown
        }
    }
    let v33 = 0;
    const v34 = v33 + 1;
    // v34 = .primitive
    v33 = v34;
}
const v35 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "setPrototypeOf", "isExtensible", "has", "getPrototypeOf", "get", "call", "ownKeys", "construct", "deleteProperty"])
const v37 = new Proxy(v3,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
v37.b = v35;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = {a:isFinite};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v12 = [1337,v9,1337,1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v13(v14,v15) {
        function v16(v17,v18) {
        }
        function v19(v20,v21,v22) {
        }
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
        try {
            const v28 = {get:v16,set:v19};
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v30 = Object.defineProperty(v25,4294967297,v28);
            // v30 = .undefined
        } catch(v31) {
            const v32 = {__proto__:v31,a:v16,...v25,...4294967296,...v31,...v25};
            // v32 = .object(ofGroup: Object, withProperties: ["byteOffset", "__proto__", "constructor", "buffer", "byteLength", "length"], withMethods: ["values", "join", "lastIndexOf", "a", "some", "findIndex", "copyWithin", "keys", "filter", "sort", "reduce", "entries", "set", "find", "reverse", "every", "reduceRight", "map", "slice", "forEach", "fill", "includes", "subarray", "indexOf"])
        }
    }
    const v33 = v12.forEach(v13,"eeeRbEqfAO");
    // v33 = .undefined
}
const v34 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "setPrototypeOf", "has", "construct", "preventExtensions", "getPrototypeOf", "ownKeys", "isExtensible", "set", "deleteProperty"])
const v36 = new Proxy(v2,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v10 = {a:isFinite};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    let v15 = 0;
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v20 = v15 + 1;
    // v20 = .primitive
    v15 = v20;
    const v22 = [1337,v10,1337,1337,1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v23(v24,v25) {
        function v26(v27,v28) {
        }
        function v29(v30,v31,v32) {
        }
        const v35 = new Uint16Array(1000);
        // v35 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
        try {
            const v38 = {get:v26,set:v29};
            // v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v40 = Object.defineProperty(v35,4294967297,v38);
            // v40 = .undefined
        } catch(v41) {
            const v42 = {__proto__:v41,a:v26,...v35,...4294967296,...v41,...v35};
            // v42 = .object(ofGroup: Object, withProperties: ["buffer", "__proto__", "byteLength", "length", "byteOffset", "constructor"], withMethods: ["reduceRight", "findIndex", "lastIndexOf", "indexOf", "a", "reduce", "filter", "join", "keys", "map", "every", "entries", "fill", "some", "includes", "slice", "reverse", "subarray", "set", "forEach", "find", "copyWithin", "values", "sort"])
        }
    }
    const v43 = v22.forEach(v23,1337);
    // v43 = .undefined
}
const v44 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:1337,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["ownKeys", "has", "getPrototypeOf", "set", "call", "construct", "isExtensible", "preventExtensions", "setPrototypeOf", "deleteProperty"])
const v46 = new Proxy(v3,v44);
// v46 = .unknown
v46[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

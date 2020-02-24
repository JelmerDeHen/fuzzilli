function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    const v7 = {a:isFinite};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v9 = [1337,v7,1337,1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v10(v11,v12) {
        function v13(v14,v15) {
        }
        function v16(v17,v18,v19) {
        }
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
        try {
            const v28 = {get:v13,set:v16};
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v30 = Object.defineProperty(v25,4294967297,v28);
            // v30 = .undefined
        } catch(v31) {
            const v32 = {__proto__:v31,a:v13,...v25,...4294967296,...v31,...v25};
            // v32 = .object(ofGroup: Object, withProperties: ["byteOffset", "byteLength", "__proto__", "length", "buffer", "constructor"], withMethods: ["a", "find", "every", "entries", "reverse", "fill", "copyWithin", "includes", "lastIndexOf", "reduceRight", "reduce", "keys", "values", "findIndex", "set", "sort", "indexOf", "slice", "subarray", "forEach", "filter", "join", "some", "map"])
        }
    }
    const v33 = v9.forEach(v10,1337);
    // v33 = .undefined
}
const v34 = {set:v1};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v36 = v34.set(v34,Symbol);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();

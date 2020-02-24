function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    const v7 = {a:isFinite};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v9 = [1337,v7,1337,1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v10(v11,v12) {
        function v13(v14,v15) {
        }
        function v16(v17,v18,v19) {
        }
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
        try {
            const v28 = {get:v13,set:v16};
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
            const v30 = Object.defineProperty(v25,4294967297,v28);
            // v30 = .undefined
        } catch(v31) {
            const v32 = {__proto__:v31,a:v13,...v25,...4294967296,...v31,...v25};
            // v32 = .object(ofGroup: Object, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["fill", "forEach", "reduce", "reduceRight", "lastIndexOf", "map", "set", "find", "every", "findIndex", "subarray", "slice", "a", "join", "values", "includes", "some", "entries", "keys", "copyWithin", "sort", "reverse", "filter", "indexOf"])
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

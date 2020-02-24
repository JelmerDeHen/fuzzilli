function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [Uint16Array,128];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v12 = {a:isFinite};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v14 = [1337,v12,1337,1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v15(v16,v17) {
        function v18(v19,v20) {
        }
        const v21 = {defineProperty:v6,getPrototypeOf:v10,construct:v17,call:v6,deleteProperty:v18,set:v17,setPrototypeOf:v6};
        // v21 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "construct", "getPrototypeOf"], withMethods: ["call", "setPrototypeOf", "defineProperty", "deleteProperty"])
        const v23 = new Proxy(v4,v21);
        // v23 = .unknown
        const v26 = new Uint16Array(1000);
        // v26 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
        try {
            const v28 = v12.__proto__;
            // v28 = .object()
            const v29 = !1337;
            // v29 = .boolean
            v28.__proto__ = v3;
            let v35 = 0;
        } catch(v36) {
            const v37 = {__proto__:v36,a:v18,...v26,...4294967296,...v36,...v26};
            // v37 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["some", "values", "lastIndexOf", "slice", "sort", "a", "fill", "find", "set", "indexOf", "keys", "findIndex", "copyWithin", "reduceRight", "forEach", "join", "map", "reverse", "every", "includes", "reduce", "entries", "filter", "subarray"])
        }
    }
    const v38 = v14.forEach(v15,1337);
    // v38 = .undefined
}
const v39 = {set:v6};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v41 = v39.set(v39,Symbol);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [Uint16Array,128];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v12 = {a:isFinite};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v14 = [1337,v12,1337,1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v15(v16,v17) {
        function v18(v19,v20) {
        }
        const v21 = {defineProperty:v6,getPrototypeOf:v10,construct:v17,call:v6,deleteProperty:v18,set:v17,setPrototypeOf:v6};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "set", "construct"], withMethods: ["call", "setPrototypeOf", "deleteProperty", "defineProperty"])
        const v23 = new Proxy(v4,v21);
        // v23 = .unknown
        const v26 = new Uint16Array(1000);
        // v26 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
        try {
            const v28 = v12.__proto__;
            // v28 = .object()
            const v29 = !1337;
            // v29 = .boolean
            v28.__proto__ = v3;
            let v35 = 0;
        } catch(v36) {
            const v37 = {__proto__:v36,a:v18,...v26,...4294967296,...v36,...v26};
            // v37 = .object(ofGroup: Object, withProperties: ["byteOffset", "byteLength", "__proto__", "length", "buffer", "constructor"], withMethods: ["reverse", "fill", "reduce", "map", "a", "find", "entries", "includes", "filter", "subarray", "some", "join", "slice", "every", "values", "indexOf", "findIndex", "set", "forEach", "reduceRight", "copyWithin", "lastIndexOf", "sort", "keys"])
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

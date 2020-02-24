function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [Uint16Array,128];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v6(v7,v8,v9,v10) {
    'use strict'
    const v12 = {a:isFinite};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v14 = [1337,v12,1337,1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v15(v16,v17) {
        function v18(v19,v20) {
        }
        const v21 = {defineProperty:v6,getPrototypeOf:v10,construct:v17,call:v6,deleteProperty:v18,set:v17,setPrototypeOf:v6};
        // v21 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "set", "getPrototypeOf"], withMethods: ["defineProperty", "call", "deleteProperty", "setPrototypeOf"])
        const v23 = new Proxy(v4,v21);
        // v23 = .unknown
        const v26 = new Uint16Array(1000);
        // v26 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
        try {
            const v28 = v12.__proto__;
            // v28 = .object()
            const v29 = !1337;
            // v29 = .boolean
            v28.__proto__ = v3;
            let v35 = 0;
        } catch(v36) {
            const v37 = {__proto__:v36,a:v18,...v26,...4294967296,...v36,...v26};
            // v37 = .object(ofGroup: Object, withProperties: ["length", "byteOffset", "__proto__", "constructor", "byteLength", "buffer"], withMethods: ["findIndex", "reverse", "values", "lastIndexOf", "join", "every", "includes", "map", "keys", "slice", "fill", "a", "forEach", "subarray", "set", "sort", "filter", "copyWithin", "indexOf", "entries", "reduceRight", "find", "some", "reduce"])
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

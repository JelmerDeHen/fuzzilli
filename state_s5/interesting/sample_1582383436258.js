function main() {
const v2 = [0,0,0,0,0];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v11 = 3156875969 <= 8;
    // v11 = .boolean
    let v13 = v11;
    const v15 = {a:isFinite};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v17 = [1337,v15,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v18(v19,v20) {
        function v21(v22,v23) {
        }
        const v26 = new Uint16Array(1000);
        // v26 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
        try {
            const v28 = v15.__proto__;
            // v28 = .object()
            v28.__proto__ = v2;
        } catch(v29) {
            const v30 = {__proto__:v29,a:v21,...v26,...4294967296,...v29,...v26};
            // v30 = .object(ofGroup: Object, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "buffer", "length"], withMethods: ["reduce", "join", "includes", "indexOf", "filter", "forEach", "entries", "find", "lastIndexOf", "reduceRight", "findIndex", "a", "slice", "keys", "some", "sort", "every", "map", "copyWithin", "reverse", "set", "subarray", "fill", "values"])
        }
    }
    const v31 = v17.forEach(v18,1337);
    // v31 = .undefined
}
const v32 = [13.37,13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v36 = Reflect.construct(WeakSet,Boolean,Boolean);
// v36 = .unknown
const v37 = v32.every(v4,v36);
// v37 = .boolean
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [0,0,0,0,0];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v11 = 3156875969 <= 8;
    // v11 = .boolean
    let v13 = v11;
    const v15 = {a:isFinite};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v17 = [1337,v15,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v18(v19,v20) {
        function v21(v22,v23) {
        }
        const v26 = new Uint16Array(1000);
        // v26 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
        try {
            const v28 = v15.__proto__;
            // v28 = .object()
            v28.__proto__ = v2;
        } catch(v29) {
            const v30 = {__proto__:v29,a:v21,...v26,...4294967296,...v29,...v26};
            // v30 = .object(ofGroup: Object, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength", "length", "constructor"], withMethods: ["reverse", "find", "values", "set", "map", "fill", "copyWithin", "sort", "filter", "reduceRight", "keys", "forEach", "slice", "some", "subarray", "includes", "reduce", "every", "indexOf", "findIndex", "join", "entries", "a", "lastIndexOf"])
        }
    }
    const v31 = v17.forEach(v18,1337);
    // v31 = .undefined
}
const v32 = [13.37,13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v36 = Reflect.construct(WeakSet,Boolean,Boolean);
// v36 = .unknown
const v37 = v32.every(v4,v36);
// v37 = .boolean
}
%NeverOptimizeFunction(main);
main();

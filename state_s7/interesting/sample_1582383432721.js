function main() {
const v2 = [0,0,0,0,0];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v11 = 3156875969 <= 8;
    // v11 = .boolean
    let v13 = v11;
    const v15 = {a:isFinite};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v17 = [1337,v15,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v18(v19,v20) {
        function v21(v22,v23) {
        }
        const v26 = new Uint16Array(1000);
        // v26 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
        try {
            const v28 = v15.__proto__;
            // v28 = .object()
            v28.__proto__ = v2;
        } catch(v29) {
            const v30 = {__proto__:v29,a:v21,...v26,...4294967296,...v29,...v26};
            // v30 = .object(ofGroup: Object, withProperties: ["buffer", "__proto__", "length", "constructor", "byteLength", "byteOffset"], withMethods: ["lastIndexOf", "every", "findIndex", "join", "subarray", "map", "indexOf", "copyWithin", "find", "reduce", "some", "entries", "fill", "forEach", "a", "slice", "reduceRight", "includes", "sort", "values", "set", "keys", "filter", "reverse"])
        }
    }
    const v31 = v17.forEach(v18,1337);
    // v31 = .undefined
}
const v32 = [13.37,13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v36 = Reflect.construct(WeakSet,Boolean,Boolean);
// v36 = .unknown
const v37 = v32.every(v4,v36);
// v37 = .boolean
}
%NeverOptimizeFunction(main);
main();

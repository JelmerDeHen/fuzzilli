function main() {
const v2 = new Uint8Array(1337);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
const v5 = [5.0,5.0,5.0,5.0];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8) {
    const v10 = arguments.length;
    // v10 = .unknown
    let v13 = 0;
    while (v13 < 1337) {
        const v14 = v13 + 1;
        // v14 = .primitive
        v10.__proto__ = "undefined";
        v13 = v14;
    }
    function v15(v16,v17,v18,v19) {
        'use strict'
        const v20 = v10[1070];
        // v20 = .unknown
    }
}
const v21 = v5.sort(v6);
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();

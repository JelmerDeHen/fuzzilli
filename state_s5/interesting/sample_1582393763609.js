function main() {
const v2 = new Uint8Array(1337);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
const v5 = [5.0,5.0,5.0,5.0];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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

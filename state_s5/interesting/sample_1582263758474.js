function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v7 = [1337,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        function v8(v9,v10,v11) {
            'use strict'
        }
        v7.__proto__ = v4;
        const v14 = new Int16Array(19873);
        // v14 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
        for (const v15 of v14) {
        }
        v7[127] = v8;
    }
    const v17 = [1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v18 = v17;
    const v19 = v3(v18);
    // v19 = .unknown
    const v20 = v2 + 1;
    // v20 = .primitive
    v2 = v20;
} while (v2 <= 3);
}
%NeverOptimizeFunction(main);
main();

function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v7 = [1337,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        function v8(v9,v10,v11) {
            'use strict'
        }
        v7.__proto__ = v4;
        const v14 = new Int16Array(19873);
        // v14 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        for (const v15 of v14) {
        }
        v7[127] = v8;
    }
    const v17 = [1337];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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

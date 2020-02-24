function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v7 = [1337,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        function v8(v9,v10,v11) {
            'use strict'
            const v13 = {set:v3};
            // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
            const v15 = Object.defineProperty(v5,"valueOf",v13);
            // v15 = .undefined
        }
        const v18 = new Int16Array(19873);
        // v18 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        for (const v19 of v18) {
        }
        v7[127] = v8;
    }
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v22 = v21;
    const v23 = v3(v22);
    // v23 = .unknown
    const v24 = v2 + 1;
    // v24 = .primitive
    v2 = v24;
} while (v2 <= 3);
}
%NeverOptimizeFunction(main);
main();

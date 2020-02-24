function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v9 = new Int16Array(19873);
        // v9 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
        const v10 = gc.apply();
        // v10 = .unknown
        for (const v11 of v9) {
        }
    }
    const v13 = [1337];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v14 = v13;
    const v15 = v4(v14);
    // v15 = .unknown
    const v16 = v3 + 1;
    // v16 = .primitive
    v3 = v16;
} while (v3 <= 3);
}
%NeverOptimizeFunction(main);
main();

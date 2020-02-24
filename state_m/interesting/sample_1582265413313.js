function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v9 = new Int16Array(19873);
        // v9 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
        const v10 = gc.apply();
        // v10 = .unknown
        for (const v11 of v9) {
        }
    }
    const v13 = [1337];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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

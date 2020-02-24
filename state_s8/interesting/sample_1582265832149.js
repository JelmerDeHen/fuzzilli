function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        for (let v11 = 0; v11 < 10; v11++) {
            for (const v12 in "undefined") {
            }
        }
        const v17 = new Uint8ClampedArray(5171);
        // v17 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
        v17[1337] = -1000000000000.0;
    }
    const v19 = [1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v20 = v19;
    const v21 = v5(v20);
    // v21 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();

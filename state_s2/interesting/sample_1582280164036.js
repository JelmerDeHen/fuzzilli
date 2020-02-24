function main() {
let v2 = Uint8Array;
let v5 = 0;
do {
    const v6 = v5 + 1;
    // v6 = .primitive
    function v7(v8,v9) {
        for (const v13 in "undefined") {
            const v14 = new v2(v5);
            // v14 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
            with ("asyncIterator") {
                const v17 = valueOf(valueOf);
                // v17 = .unknown
            }
        }
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v23 = v22;
    const v24 = v7(v23);
    // v24 = .unknown
    v5 = v6;
} while (v5 < 7);
}
%NeverOptimizeFunction(main);
main();

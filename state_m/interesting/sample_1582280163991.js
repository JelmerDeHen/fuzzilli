function main() {
let v2 = Uint8Array;
let v5 = 0;
do {
    const v6 = v5 + 1;
    // v6 = .primitive
    function v7(v8,v9) {
        for (const v13 in "undefined") {
            const v14 = new v2(v5);
            // v14 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
            with ("asyncIterator") {
                const v17 = valueOf(valueOf);
                // v17 = .unknown
            }
        }
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v23 = v22;
    const v24 = v7(v23);
    // v24 = .unknown
    v5 = v6;
} while (v5 < 7);
}
%NeverOptimizeFunction(main);
main();

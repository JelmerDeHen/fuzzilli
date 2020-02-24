function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = Math.pow(1337);
        // v8 = .number
        const v11 = new Uint8Array(19873);
        // v11 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
        for (const v12 of v11) {
        }
        return v8;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v15 = v14;
    const v16 = v4(v15);
    // v16 = .unknown
    const v17 = v3 + 1;
    // v17 = .primitive
    v3 = v17;
} while (v3 < 8);
}
%NeverOptimizeFunction(main);
main();

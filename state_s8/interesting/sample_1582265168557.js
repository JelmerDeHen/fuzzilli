function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = Math.pow(1337);
        // v8 = .number
        const v11 = new Uint8Array(19873);
        // v11 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
        for (const v12 of v11) {
        }
        return v8;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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

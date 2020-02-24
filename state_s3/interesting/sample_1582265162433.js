function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = Math.pow(1337);
        // v8 = .number
        const v11 = new Uint8Array(19873);
        // v11 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
        for (const v12 of v11) {
        }
        return v8;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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

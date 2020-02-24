function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = Math.pow(1337);
        // v8 = .number
        const v11 = new Uint8Array(19873);
        // v11 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
        for (const v12 of v11) {
        }
        return v8;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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

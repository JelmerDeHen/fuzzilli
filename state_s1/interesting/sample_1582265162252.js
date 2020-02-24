function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v8 = Math.pow(1337);
        // v8 = .number
        const v11 = new Uint8Array(19873);
        // v11 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
        for (const v12 of v11) {
        }
        return v8;
    }
    const v14 = [1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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

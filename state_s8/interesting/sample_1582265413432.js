function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v9 = new Int16Array(19873);
        // v9 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
        const v10 = gc.apply();
        // v10 = .unknown
        for (const v11 of v9) {
        }
    }
    const v13 = [1337];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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

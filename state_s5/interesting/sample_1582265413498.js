function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v9 = new Int16Array(19873);
        // v9 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
        const v10 = gc.apply();
        // v10 = .unknown
        for (const v11 of v9) {
        }
    }
    const v13 = [1337];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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

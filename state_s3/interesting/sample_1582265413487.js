function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        const v9 = new Int16Array(19873);
        // v9 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        const v10 = gc.apply();
        // v10 = .unknown
        for (const v11 of v9) {
        }
    }
    const v13 = [1337];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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

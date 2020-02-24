function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v8 = new Uint16Array(19873);
        // v8 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
        for (const v9 of v8) {
        }
    }
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v12 = v11;
    const v13 = v3(v12);
    // v13 = .unknown
    const v14 = v2 + 1;
    // v14 = .primitive
    v2 = v14;
} while (v2 <= 3);
}
%NeverOptimizeFunction(main);
main();

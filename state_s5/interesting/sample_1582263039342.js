function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v8 = new Uint32Array(19873);
        // v8 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
        for (const v9 of v8) {
        }
    }
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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

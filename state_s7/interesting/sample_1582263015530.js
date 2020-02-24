function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v8 = new Uint32Array(19873);
        // v8 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
        for (const v9 of v8) {
        }
    }
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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

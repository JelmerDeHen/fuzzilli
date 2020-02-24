function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v8 = new Uint32Array(19873);
        // v8 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
        for (const v9 of v8) {
        }
    }
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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

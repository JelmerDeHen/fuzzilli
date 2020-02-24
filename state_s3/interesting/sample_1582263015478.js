function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v8 = new Uint32Array(19873);
        // v8 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
        for (const v9 of v8) {
        }
    }
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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

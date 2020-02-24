function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        const v11 = RegExp(v7);
        // v11 = .object()
        const v12 = v11.toString();
        // v12 = .unknown
        for (let v13 = -65537; v13 < 10; v13++) {
        }
    }
    const v15 = [1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v16 = v15;
    const v17 = v5(v16);
    // v17 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();

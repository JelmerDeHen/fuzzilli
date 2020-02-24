function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (let v7 = 0; v7 < 100; v7++) {
    const v9 = [1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v11(v12,v13) {
        const v15 = Math.fround(v12);
        // v15 = .number
        const v17 = v15 >= -2;
        // v17 = .boolean
        let v18 = v9;
        if (v17) {
        } else {
        }
    }
    const v20 = v11(Array);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

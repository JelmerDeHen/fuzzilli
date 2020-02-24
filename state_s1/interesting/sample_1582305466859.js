function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (let v7 = 0; v7 < 100; v7++) {
    const v9 = [1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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

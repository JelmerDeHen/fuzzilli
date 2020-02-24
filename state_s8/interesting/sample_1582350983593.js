function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v7 = -128;
for (let v9 = 0; v9 < 100; v9++) {
    function v11(v12,v13) {
        const v15 = Math.fround(v12);
        // v15 = .number
        const v16 = {valueOf:v15};
        // v16 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
        let v19 = -128;
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        const v22 = v15 >= -2;
        // v22 = .boolean
    }
    const v23 = v11(Array);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

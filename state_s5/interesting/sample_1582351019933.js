function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v7 = -128;
for (let v9 = 0; v9 < 100; v9++) {
    function v11(v12,v13) {
        const v15 = Math.fround(v12);
        // v15 = .number
        const v16 = {valueOf:v15};
        // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
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

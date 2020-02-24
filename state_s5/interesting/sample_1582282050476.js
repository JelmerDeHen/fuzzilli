function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    const v8 = [13.37,13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v10 = {b:2147483647};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    function v11(v12,v13) {
        for (let v17 = 0; v17 < 3; v17++) {
            for (let v20 = 0; v20 < v17; v20++) {
            }
        }
    }
    const v24 = v8.forEach(v11,v10);
    // v24 = .undefined
    let v27 = 0;
    let v30 = 0;
    const v31 = v27 + 1;
    // v31 = .primitive
    v27 = v31;
}
}
%NeverOptimizeFunction(main);
main();

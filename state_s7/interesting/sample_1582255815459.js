function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7) {
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            const v18 = v17 + 1;
            // v18 = .primitive
            function v20(v21,v22) {
                return v10;
            }
            let v25 = 0;
            v17 = v18;
            const v28 = v14 + 1;
            // v28 = .primitive
            v14 = v28;
        } while (v14 < 8);
    }
    const v29 = v10 + 1;
    // v29 = .primitive
    v10 = v29;
    for (const v30 in v10) {
    }
}
const v31 = v4.forEach(v5,"eeeRbEqfAO");
// v31 = .undefined
}
%NeverOptimizeFunction(main);
main();

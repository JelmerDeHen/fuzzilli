function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7) {
    let v10 = 3200567472;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            function v15(v16,v17) {
                return v10;
            }
            const v18 = v14 + 1;
            // v18 = .primitive
            v14 = v18;
        } while (v14 < 8);
    }
    const v19 = v10 + 1;
    // v19 = .primitive
    v10 = v19;
    for (const v20 in v10) {
    }
}
const v21 = v4.forEach(v5,"eeeRbEqfAO");
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();

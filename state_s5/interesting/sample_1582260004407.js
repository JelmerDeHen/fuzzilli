function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {b:2147483647};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 3239597223;
        do {
            let v14 = 0;
            do {
                const v15 = v14 + 1;
                // v15 = .primitive
                v14 = v15;
            } while (v14 < 7);
            const v16 = v11 + 1;
            // v16 = .primitive
            v11 = "boolean";
        } while (v11 < 8);
    }
}
const v17 = v1.forEach(v4,v3);
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();

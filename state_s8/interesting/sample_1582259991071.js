function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {b:2147483647};
// v3 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
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

function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = {b:-4096};
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
            const v16 = ~v11;
            // v16 = .boolean
            v11 = v16;
        } while (v11 < 8);
    }
}
const v17 = v1.forEach(v4,v3);
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();

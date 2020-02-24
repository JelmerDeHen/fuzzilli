function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
            const v13 = parseFloat(v5);
            // v13 = .float
            for (const v15 in "boolean") {
            }
            const v16 = "boolean" + v13;
            // v16 = .primitive
            const v17 = v8 + 1;
            // v17 = .primitive
            v8 = v17;
        } while (v8 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v20 = v19;
const v21 = v1(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

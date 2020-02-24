function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v8 in "boolean") {
    let v11 = 0;
    do {
        function v12(v13,v14) {
            const v15 = v11 * v11;
            // v15 = .number
            const v16 = Object(v14);
            // v16 = .object()
            let v19 = 0;
            do {
            } while (v19 < 0);
            const v20 = v5.length;
            // v20 = .integer
            v16[v15] = v19;
        }
        const v21 = v12();
        // v21 = .unknown
        const v22 = v11 + 1;
        // v22 = .primitive
        v11 = v22;
    } while (v11 < 8);
}
}
%NeverOptimizeFunction(main);
main();

function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    v3 = v4;
} while (v3 < 10);
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v8 = v7;
let v10 = undefined;
for (const v12 in "boolean") {
    let v15 = 0;
    do {
        let v18 = 0;
        do {
            const v19 = "object" + 1;
            // v19 = .primitive
            v18 = v19;
        } while (v18 < 7);
        let v22 = 0;
        do {
            v8.length = 1337;
            for (const v24 in v8) {
            }
            const v25 = v22 + 1;
            // v25 = .primitive
            v22 = v25;
        } while (v22 < 3);
        const v26 = v15 + 1;
        // v26 = .primitive
        v15 = v26;
    } while (v15 < 8);
}
}
%NeverOptimizeFunction(main);
main();

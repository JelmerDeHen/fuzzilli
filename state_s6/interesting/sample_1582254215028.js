function main() {
for (let v6 = 0; v6 < 3; v6++) {
    let v9 = 0;
    while (v9 < 9) {
        const v10 = v9 % 9;
        // v10 = .number
        const v11 = v9 + 1;
        // v11 = .primitive
        v9 = v11;
    }
}
let v15 = 0;
while (v15 < 7) {
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
}
for (const v17 in "object") {
}
const v19 = [13.37,13.37,13.37,13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
v19[9] = 0;
let v23 = 0;
const v25 = gc();
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();

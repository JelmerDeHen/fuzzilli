function main() {
for (let v9 = 0; v9 < 3; v9++) {
    let v12 = 0;
    while (v12 < 9) {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    }
}
let v17 = 0;
while (v17 < 7) {
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
}
for (const v19 in "object") {
}
let v22 = 0;
do {
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
} while (v22 < 5);
for (let v27 = 0; v27 < 7; v27++) {
    const v30 = [1337,1337,1337,"object"];
    // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
}
}
%NeverOptimizeFunction(main);
main();

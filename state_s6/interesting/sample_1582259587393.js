function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    const v14 = v9 + 1;
    // v14 = .primitive
    v9 = v14;
    let v16 = v6;
    for (const v18 in "boolean") {
        const v19 = v16.split(v18,1337);
        // v19 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();

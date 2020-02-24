function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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

function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v8 = v6;
    do {
        let v11 = 0;
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
        let v15 = 0;
        const v16 = v8 + 1;
        // v16 = .primitive
        v8 = v16;
    } while (v8 < 8);
}
}
%NeverOptimizeFunction(main);
main();

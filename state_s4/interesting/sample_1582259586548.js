function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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

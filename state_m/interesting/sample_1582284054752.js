function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    const v5 = typeof v1;
    // v5 = .string
    let v6 = v5;
    const v7 = v6[3];
    // v7 = .unknown
}
let v10 = 2709592071;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v14 = v13;
v13[7] = 0;
const v16 = v14.indexOf(v10,8);
// v16 = .integer
}
%NeverOptimizeFunction(main);
main();

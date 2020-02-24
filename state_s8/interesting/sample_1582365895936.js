function main() {
let v2 = 0;
while (v2 < 1337) {
    const v3 = v2 + 1;
    // v3 = .primitive
    let v6 = v3;
    const v7 = Math.pow(v6,7);
    // v7 = .number
    const v8 = Math.sin(v7);
    // v8 = .number
    v2 = v3;
}
let v11 = "function";
const v12 = [v11,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

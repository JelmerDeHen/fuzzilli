function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
let v7 = v2;
do {
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
} while (v7 < 9007199254740993);
}
%NeverOptimizeFunction(main);
main();

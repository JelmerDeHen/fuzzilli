function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
do {
    const v10 = Math.exp(v8);
    // v10 = .number
    const v11 = v8 + 1;
    // v11 = .primitive
    v8 = v11;
} while (v8 < 8);
}
%NeverOptimizeFunction(main);
main();

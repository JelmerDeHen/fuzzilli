function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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

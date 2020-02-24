function main() {
const v1 = [9007199254740992];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v2 = 9007199254740992 + v1;
// v2 = .primitive
let v5 = 0;
do {
    v5 = v2;
} while (v5 < 1);
}
%NeverOptimizeFunction(main);
main();

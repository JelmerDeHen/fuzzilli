function main() {
const v1 = [9007199254740992];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = 9007199254740992 + v1;
// v2 = .primitive
let v5 = 0;
do {
    v5 = v2;
} while (v5 < 1);
}
%NeverOptimizeFunction(main);
main();

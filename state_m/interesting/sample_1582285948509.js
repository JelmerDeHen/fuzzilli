function main() {
const v1 = [9007199254740992];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = 9007199254740992 + v1;
// v2 = .primitive
let v5 = 0;
do {
    v5 = v2;
} while (v5 < 1);
}
%NeverOptimizeFunction(main);
main();

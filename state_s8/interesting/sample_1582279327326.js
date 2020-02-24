function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = 9007199254740992 + v2;
// v3 = .primitive
let v6 = 0;
do {
    v6 = v3;
} while (v6 < 1);
}
%NeverOptimizeFunction(main);
main();

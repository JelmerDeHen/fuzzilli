function main() {
const v1 = [9007199254740992];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v2 = 9007199254740992 + v1;
// v2 = .primitive
let v5 = 0;
do {
    v5 = v2;
} while (v5 < 1);
}
%NeverOptimizeFunction(main);
main();

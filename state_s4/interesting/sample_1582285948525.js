function main() {
const v1 = [9007199254740992];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = 9007199254740992 + v1;
// v2 = .primitive
let v5 = 0;
do {
    v5 = v2;
} while (v5 < 1);
}
%NeverOptimizeFunction(main);
main();

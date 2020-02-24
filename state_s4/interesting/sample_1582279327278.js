function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = 9007199254740992 + v2;
// v3 = .primitive
let v6 = 0;
do {
    v6 = v3;
} while (v6 < 1);
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = 9007199254740992 + v2;
// v3 = .primitive
let v6 = 0;
do {
    v6 = v3;
} while (v6 < 1);
}
%NeverOptimizeFunction(main);
main();

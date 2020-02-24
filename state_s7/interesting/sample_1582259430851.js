function main() {
const v2 = ["a",-9007199254740992,-9007199254740992];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = 0;
const v6 = v2.fill();
// v6 = .undefined
const v7 = v5 + 1;
// v7 = .primitive
v5 = v7;
}
%NeverOptimizeFunction(main);
main();

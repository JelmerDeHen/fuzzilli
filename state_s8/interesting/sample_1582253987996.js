function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = v2[1024];
// v3 = .unknown
let v5 = 0;
const v6 = v3 - 1;
// v6 = .primitive
const v7 = v6 + 1;
// v7 = .primitive
v5 = v7;
for (const v10 in "object") {
}
"object"[9007199254740992] = 1994175169;
}
%NeverOptimizeFunction(main);
main();

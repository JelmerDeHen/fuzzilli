function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = Symbol.unscopables;
// v4 = .unknown
const v5 = v1[v4];
// v5 = .unknown
for (const v6 in v5) {
}
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
let v19 = 0;
const v23 = v19 + 1;
// v23 = .primitive
v19 = v23;
}
%NeverOptimizeFunction(main);
main();

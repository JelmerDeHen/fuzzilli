function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
for (let v8 = 0; v8 < 100; v8++) {
}
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v20 = Symbol.unscopables;
// v20 = .unknown
const v21 = v13[v20];
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

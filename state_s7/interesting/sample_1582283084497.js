function main() {
let v4 = 0;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v9 = v4 + 1;
// v9 = .primitive
v4 = v9;
const v10 = typeof 13.37;
// v10 = .string
const v12 = v10 === "object";
// v12 = .boolean
const v16 = [-4294967296];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v17 = v16;
const v18 = v17.shift();
// v18 = .unknown
for (const v19 in v17) {
}
}
%NeverOptimizeFunction(main);
main();

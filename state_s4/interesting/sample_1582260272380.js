function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = new Float64Array(57816);
// v6 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
for (const v15 in v6) {
}
}
%NeverOptimizeFunction(main);
main();

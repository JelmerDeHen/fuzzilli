function main() {
let v4 = -3729873761;
let v6 = undefined;
let v10 = 0;
const v14 = v10 + 1;
// v14 = .primitive
v10 = v14;
const v16 = new Int32Array(v6);
// v16 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
for (const v17 in v16) {
}
}
%NeverOptimizeFunction(main);
main();

function main() {
let v4 = -3729873761;
let v6 = undefined;
let v10 = 0;
const v14 = v10 + 1;
// v14 = .primitive
v10 = v14;
const v16 = new Int32Array(v6);
// v16 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
for (const v17 in v16) {
}
}
%NeverOptimizeFunction(main);
main();

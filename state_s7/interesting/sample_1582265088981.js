function main() {
let v4 = -3729873761;
let v6 = undefined;
let v10 = 0;
const v14 = v10 + 1;
// v14 = .primitive
v10 = v14;
const v16 = new Int32Array(v6);
// v16 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
for (const v17 in v16) {
}
}
%NeverOptimizeFunction(main);
main();

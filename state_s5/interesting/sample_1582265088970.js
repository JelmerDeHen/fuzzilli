function main() {
let v4 = -3729873761;
let v6 = undefined;
let v10 = 0;
const v14 = v10 + 1;
// v14 = .primitive
v10 = v14;
const v16 = new Int32Array(v6);
// v16 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
for (const v17 in v16) {
}
}
%NeverOptimizeFunction(main);
main();

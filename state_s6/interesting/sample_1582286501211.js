function main() {
let v1 = 13.37;
let v3 = undefined;
let v5 = 2;
const v7 = (1337)[-2147483647];
// v7 = .unknown
const v9 = new Float64Array(v5);
// v9 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v10 = v9.sort(v7);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();

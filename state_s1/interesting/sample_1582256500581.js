function main() {
const v2 = {a:eval,length:3};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

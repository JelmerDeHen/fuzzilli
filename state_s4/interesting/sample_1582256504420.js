function main() {
const v2 = {a:eval,length:3};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
}
%NeverOptimizeFunction(main);
main();

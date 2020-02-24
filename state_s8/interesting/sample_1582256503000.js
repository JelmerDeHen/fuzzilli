function main() {
const v2 = {a:eval,length:3};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();

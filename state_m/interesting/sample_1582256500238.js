function main() {
const v2 = {a:eval,length:3};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
}
%NeverOptimizeFunction(main);
main();

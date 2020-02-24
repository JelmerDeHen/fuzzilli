function main() {
const v2 = {a:eval,length:3};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
}
%NeverOptimizeFunction(main);
main();

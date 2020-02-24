function main() {
const v2 = new Int16Array("valueOf");
// v2 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
const v4 = new Int32Array(v2);
// v4 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v5 = v4.set(v2);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();

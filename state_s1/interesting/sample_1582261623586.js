function main() {
const v4 = new Uint8Array(57874);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
const v5 = v4.indexOf(8,10000);
// v5 = .integer
}
%NeverOptimizeFunction(main);
main();

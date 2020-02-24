function main() {
const v2 = new Int16Array(16);
// v2 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v4 = new Uint8Array(v2);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
const v5 = new Int16Array(v4);
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
}
%NeverOptimizeFunction(main);
main();

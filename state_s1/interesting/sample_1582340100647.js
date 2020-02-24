function main() {
const v3 = new Int8Array(1337);
// v3 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
v3.constructor = Int16Array;
const v6 = v3.slice(1024,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["buffer", "constructor", "byteOffset", "length", "__proto__", "byteLength"], withMethods: ["indexOf", "reduce", "join", "map", "lastIndexOf", "every", "findIndex", "forEach", "entries", "values", "fill", "includes", "reverse", "slice", "filter", "sort", "find", "keys", "copyWithin", "set", "some", "subarray", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();

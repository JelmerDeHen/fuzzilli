function main() {
const v4 = new Int32Array(1337);
// v4 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
v4.constructor = Uint8Array;
const v6 = v4.slice(13.37,234126503);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["map", "subarray", "lastIndexOf", "every", "forEach", "indexOf", "find", "filter", "copyWithin", "includes", "keys", "reduce", "entries", "fill", "values", "findIndex", "some", "join", "reduceRight", "slice", "set", "sort", "reverse"])
}
%NeverOptimizeFunction(main);
main();

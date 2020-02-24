function main() {
const v4 = new Int32Array(1337);
// v4 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
v4.constructor = Uint8Array;
const v6 = v4.slice(13.37,234126503);
// v6 = .object(ofGroup: Int32Array, withProperties: ["length", "constructor", "byteOffset", "__proto__", "buffer", "byteLength"], withMethods: ["forEach", "reduce", "reverse", "slice", "subarray", "map", "find", "join", "lastIndexOf", "includes", "copyWithin", "sort", "some", "indexOf", "entries", "every", "filter", "fill", "findIndex", "keys", "set", "reduceRight", "values"])
}
%NeverOptimizeFunction(main);
main();

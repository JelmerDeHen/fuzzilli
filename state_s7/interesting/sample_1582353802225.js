function main() {
const v4 = new Uint32Array(1337);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
v4.constructor = Uint8Array;
const v6 = v4.slice(Uint8Array,234126503);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["find", "copyWithin", "includes", "reverse", "map", "slice", "join", "lastIndexOf", "sort", "findIndex", "indexOf", "set", "keys", "filter", "some", "subarray", "forEach", "fill", "entries", "values", "reduce", "reduceRight", "every"])
}
%NeverOptimizeFunction(main);
main();

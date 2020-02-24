function main() {
const v4 = new Int16Array(64);
// v4 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
v4.constructor = Uint8Array;
const v6 = v4.slice("name",16);
// v6 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "byteLength", "byteOffset", "length"], withMethods: ["keys", "reduceRight", "every", "forEach", "slice", "find", "set", "findIndex", "fill", "entries", "map", "reduce", "lastIndexOf", "includes", "indexOf", "values", "sort", "reverse", "filter", "subarray", "copyWithin", "join", "some"])
}
%NeverOptimizeFunction(main);
main();

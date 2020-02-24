function main() {
const v3 = new Uint32Array(13.37);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
v3.constructor = Int16Array;
const v6 = v3.slice(-2147483649,1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "buffer", "constructor", "byteOffset", "__proto__", "length"], withMethods: ["reverse", "find", "values", "some", "findIndex", "every", "reduce", "entries", "set", "forEach", "keys", "fill", "slice", "includes", "map", "reduceRight", "lastIndexOf", "sort", "filter", "subarray", "join", "copyWithin", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

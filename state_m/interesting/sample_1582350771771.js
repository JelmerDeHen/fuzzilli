function main() {
const v3 = new Int16Array(parseInt);
// v3 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
v3.constructor = Uint16Array;
const v6 = v3.slice(-1024,234126503);
// v6 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "byteLength", "byteOffset", "__proto__", "constructor"], withMethods: ["fill", "reverse", "forEach", "map", "find", "set", "copyWithin", "findIndex", "indexOf", "filter", "slice", "subarray", "reduce", "entries", "keys", "includes", "some", "sort", "every", "reduceRight", "values", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

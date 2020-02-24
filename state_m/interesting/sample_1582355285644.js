function main() {
const v4 = new Uint16Array(1337);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
v4.constructor = Int16Array;
const v6 = v4.slice(13.37,1337);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["length", "buffer", "__proto__", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "entries", "subarray", "join", "values", "every", "lastIndexOf", "includes", "keys", "fill", "findIndex", "indexOf", "reverse", "some", "sort", "reduce", "reduceRight", "forEach", "find", "slice", "map", "filter", "set"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = new Uint16Array(1);
// v3 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
v3.constructor = Int16Array;
const v5 = v3.slice(v3,1337);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["length", "buffer", "__proto__", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "entries", "subarray", "join", "values", "every", "lastIndexOf", "includes", "keys", "fill", "findIndex", "indexOf", "reverse", "some", "sort", "reduce", "reduceRight", "forEach", "find", "slice", "map", "filter", "set"])
}
%NeverOptimizeFunction(main);
main();
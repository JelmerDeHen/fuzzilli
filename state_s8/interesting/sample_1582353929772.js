function main() {
const v4 = new Uint32Array(13.37);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
v4.constructor = Uint16Array;
const v7 = v4.slice(-2147483649,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "byteLength", "constructor"], withMethods: ["forEach", "reduce", "findIndex", "reverse", "filter", "find", "indexOf", "entries", "includes", "map", "every", "copyWithin", "subarray", "join", "fill", "lastIndexOf", "values", "sort", "keys", "slice", "set", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();

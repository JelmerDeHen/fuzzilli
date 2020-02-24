function main() {
const v4 = new Uint32Array(13.37);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
v4.constructor = Uint16Array;
const v7 = v4.slice(-2147483649,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "constructor", "length"], withMethods: ["some", "reduce", "copyWithin", "sort", "reduceRight", "every", "subarray", "slice", "includes", "set", "filter", "findIndex", "map", "join", "values", "indexOf", "find", "reverse", "entries", "fill", "forEach", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();

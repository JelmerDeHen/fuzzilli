function main() {
const v3 = new Int32Array(1337);
// v3 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
v3.constructor = Uint16Array;
const v6 = v3.slice(-2147483649,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["reverse", "findIndex", "sort", "indexOf", "map", "includes", "set", "subarray", "keys", "forEach", "lastIndexOf", "find", "fill", "slice", "entries", "values", "some", "every", "filter", "join", "copyWithin", "reduce", "reduceRight"])
const v8 = new Uint8ClampedArray(v6);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
}
%NeverOptimizeFunction(main);
main();

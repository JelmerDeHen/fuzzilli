function main() {
const v7 = new Float64Array(1337);
// v7 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
v7.constructor = Float32Array;
const v9 = v7.slice(Uint8Array,234126503);
// v9 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "__proto__", "byteLength", "buffer", "byteOffset"], withMethods: ["slice", "includes", "entries", "keys", "map", "set", "join", "values", "forEach", "every", "reverse", "indexOf", "reduce", "lastIndexOf", "find", "sort", "copyWithin", "findIndex", "filter", "some", "subarray", "reduceRight", "fill"])
}
%NeverOptimizeFunction(main);
main();

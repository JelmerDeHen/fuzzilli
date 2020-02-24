function main() {
const v1 = {__proto__:Float32Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(v1);
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
v5.constructor = Float32Array;
const v7 = v5.slice(Uint8Array,234126503);
// v7 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "byteLength", "byteOffset", "__proto__", "constructor"], withMethods: ["fill", "reverse", "forEach", "map", "find", "set", "copyWithin", "findIndex", "indexOf", "filter", "slice", "subarray", "reduce", "entries", "keys", "includes", "some", "sort", "every", "reduceRight", "values", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

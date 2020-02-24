function main() {
const v1 = {__proto__:Float32Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(v1);
// v5 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
v5.constructor = Float32Array;
const v7 = v5.slice(Uint8Array,234126503);
// v7 = .object(ofGroup: Int16Array, withProperties: ["length", "byteOffset", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["keys", "entries", "filter", "findIndex", "every", "sort", "join", "copyWithin", "lastIndexOf", "find", "slice", "reduceRight", "some", "reverse", "map", "set", "reduce", "forEach", "values", "fill", "indexOf", "subarray", "includes"])
}
%NeverOptimizeFunction(main);
main();

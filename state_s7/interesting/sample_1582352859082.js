function main() {
const v1 = {__proto__:Float32Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(v1);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
v5.constructor = Float32Array;
const v7 = v5.slice(Uint8Array,234126503);
// v7 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "__proto__", "constructor", "byteOffset", "byteLength"], withMethods: ["values", "reverse", "filter", "slice", "lastIndexOf", "reduce", "reduceRight", "map", "findIndex", "sort", "every", "some", "keys", "copyWithin", "set", "includes", "find", "indexOf", "forEach", "subarray", "join", "fill", "entries"])
}
%NeverOptimizeFunction(main);
main();

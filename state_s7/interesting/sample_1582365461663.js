function main() {
const v3 = new Int16Array(1337);
// v3 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
v3.constructor = Int8Array;
const v5 = v3.slice(Int8Array,16);
// v5 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "__proto__", "constructor", "byteOffset", "byteLength"], withMethods: ["values", "reverse", "filter", "slice", "lastIndexOf", "reduce", "reduceRight", "map", "findIndex", "sort", "every", "some", "keys", "copyWithin", "set", "includes", "find", "indexOf", "forEach", "subarray", "join", "fill", "entries"])
}
%NeverOptimizeFunction(main);
main();

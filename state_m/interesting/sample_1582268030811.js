function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = new Uint8Array(v2);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
const v5 = new Int32Array(v3);
// v5 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
}
%NeverOptimizeFunction(main);
main();

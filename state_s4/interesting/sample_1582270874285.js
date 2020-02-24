function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = new Uint32Array(v1);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
const v5 = new Uint8ClampedArray(v4);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();

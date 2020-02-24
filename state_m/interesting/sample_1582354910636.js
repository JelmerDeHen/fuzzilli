function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = new Uint32Array(1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
v6.constructor = Uint8Array;
const v7 = v6.slice(Uint8Array,v1);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "buffer", "constructor", "byteOffset", "__proto__", "length"], withMethods: ["reverse", "find", "values", "some", "findIndex", "every", "reduce", "entries", "set", "forEach", "keys", "fill", "slice", "includes", "map", "reduceRight", "lastIndexOf", "sort", "filter", "subarray", "join", "copyWithin", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

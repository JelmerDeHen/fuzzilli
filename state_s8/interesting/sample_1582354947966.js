function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = new Uint32Array(1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
v6.constructor = Uint8Array;
const v7 = v6.slice(Uint8Array,v1);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "byteLength", "constructor"], withMethods: ["forEach", "reduce", "findIndex", "reverse", "filter", "find", "indexOf", "entries", "includes", "map", "every", "copyWithin", "subarray", "join", "fill", "lastIndexOf", "values", "sort", "keys", "slice", "set", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();

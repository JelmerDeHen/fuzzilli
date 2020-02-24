function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = new Uint32Array(1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
v6.constructor = Uint8Array;
const v7 = v6.slice(Uint8Array,v1);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "constructor", "buffer", "__proto__", "length", "byteOffset"], withMethods: ["slice", "findIndex", "some", "copyWithin", "indexOf", "values", "includes", "forEach", "map", "sort", "entries", "filter", "every", "reduce", "reverse", "subarray", "reduceRight", "set", "join", "keys", "fill", "find", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

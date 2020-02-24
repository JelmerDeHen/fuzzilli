function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = new Uint32Array(v1);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
v4.constructor = Int8Array;
const v7 = v4.slice(-3626034399,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["values", "copyWithin", "slice", "every", "map", "filter", "keys", "entries", "find", "subarray", "sort", "findIndex", "includes", "forEach", "reduceRight", "set", "join", "some", "indexOf", "lastIndexOf", "fill", "reduce", "reverse"])
}
%NeverOptimizeFunction(main);
main();

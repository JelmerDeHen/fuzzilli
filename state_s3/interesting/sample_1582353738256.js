function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = new Uint16Array(v1);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
v4.constructor = Uint8Array;
const v6 = v4.slice(-1024,13.37);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["reduceRight", "indexOf", "every", "fill", "reverse", "sort", "copyWithin", "entries", "set", "join", "values", "forEach", "filter", "some", "map", "reduce", "slice", "find", "findIndex", "includes", "subarray", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();

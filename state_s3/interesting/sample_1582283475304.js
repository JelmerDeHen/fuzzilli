function main() {
const v3 = [1337,13.37,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = new Uint8Array(v3);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
const v7 = (1337)[Function];
// v7 = .unknown
const v8 = v5.sort(v7);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

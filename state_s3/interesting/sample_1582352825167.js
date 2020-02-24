function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
v4.constructor = Int16Array;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "buffer", "length"], withMethods: ["keys", "reverse", "slice", "includes", "filter", "every", "find", "indexOf", "lastIndexOf", "entries", "join", "findIndex", "set", "values", "forEach", "subarray", "copyWithin", "reduceRight", "map", "reduce", "some", "sort", "fill"])
}
%NeverOptimizeFunction(main);
main();

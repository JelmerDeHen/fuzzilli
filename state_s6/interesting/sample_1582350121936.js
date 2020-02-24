function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [-2894130274,"split",v3,"split"];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = new Int8Array(v4);
// v7 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
v7.constructor = Int16Array;
const v9 = v7.slice(v7,1337);
// v9 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["map", "some", "copyWithin", "findIndex", "entries", "every", "indexOf", "sort", "lastIndexOf", "reverse", "find", "subarray", "keys", "includes", "reduce", "set", "fill", "values", "join", "slice", "reduceRight", "forEach", "filter"])
}
%NeverOptimizeFunction(main);
main();

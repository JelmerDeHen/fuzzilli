function main() {
let v2 = undefined;
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = new Uint32Array(v4);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
v7.constructor = Uint16Array;
const v10 = v7.slice(-2147483649,1337);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "byteLength", "length"], withMethods: ["map", "forEach", "sort", "includes", "indexOf", "findIndex", "join", "find", "reduce", "subarray", "reduceRight", "values", "slice", "fill", "set", "reverse", "some", "keys", "every", "lastIndexOf", "filter", "entries", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();

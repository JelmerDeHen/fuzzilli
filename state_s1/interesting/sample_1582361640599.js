function main() {
const v2 = [13.37,13.37,9007199254740992,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = v2;
const v6 = new Float32Array(v3);
// v6 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
v6.constructor = Int16Array;
const v9 = v6.slice(-9007199254740993,1337);
// v9 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "byteLength", "__proto__", "constructor", "buffer"], withMethods: ["filter", "set", "reduce", "sort", "slice", "values", "findIndex", "reverse", "forEach", "map", "keys", "every", "some", "subarray", "reduceRight", "includes", "join", "find", "fill", "indexOf", "entries", "copyWithin", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

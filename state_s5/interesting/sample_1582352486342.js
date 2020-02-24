function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = new Int32Array(128);
// v5 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
v5.constructor = Float32Array;
const v7 = v5.slice(v1,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["length", "constructor", "byteOffset", "__proto__", "buffer", "byteLength"], withMethods: ["forEach", "reduce", "reverse", "slice", "subarray", "map", "find", "join", "lastIndexOf", "includes", "copyWithin", "sort", "some", "indexOf", "entries", "every", "filter", "fill", "findIndex", "keys", "set", "reduceRight", "values"])
}
%NeverOptimizeFunction(main);
main();

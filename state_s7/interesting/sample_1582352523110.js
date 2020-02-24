function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
v5.constructor = Uint32Array;
const v8 = v5.slice(-9007199254740993,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteOffset", "byteLength", "buffer", "length", "constructor"], withMethods: ["every", "subarray", "join", "lastIndexOf", "findIndex", "reverse", "map", "entries", "find", "keys", "set", "indexOf", "reduce", "some", "includes", "copyWithin", "sort", "slice", "forEach", "reduceRight", "values", "filter", "fill"])
}
%NeverOptimizeFunction(main);
main();

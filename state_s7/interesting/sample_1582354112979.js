function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = new Float32Array(v1);
// v4 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
v4.constructor = Int16Array;
const v7 = v4.slice(-2847526874,234126503);
// v7 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteOffset", "byteLength", "buffer", "length", "constructor"], withMethods: ["every", "subarray", "join", "lastIndexOf", "findIndex", "reverse", "map", "entries", "find", "keys", "set", "indexOf", "reduce", "some", "includes", "copyWithin", "sort", "slice", "forEach", "reduceRight", "values", "filter", "fill"])
const v10 = new Float64Array(6992);
// v10 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
let v11 = v10;
const v14 = new Proxy(v11,Object);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

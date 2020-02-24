function main() {
const v2 = new Int32Array(1337);
// v2 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
const v5 = v2.slice(-2147483649,1337);
// v5 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["reverse", "findIndex", "sort", "indexOf", "map", "includes", "set", "subarray", "keys", "forEach", "lastIndexOf", "find", "fill", "slice", "entries", "values", "some", "every", "filter", "join", "copyWithin", "reduce", "reduceRight"])
const v7 = new Uint8ClampedArray(v5);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v14 = 0;
let v17 = 0;
let v20 = 0;
const v22 = new Proxy(v10,v7);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

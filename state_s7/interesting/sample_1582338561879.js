function main() {
const v2 = 2.2250738585072014e-308 / 9007199254740991;
// v2 = .number
let v4 = v2;
const v9 = [13.37,-4294967297,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = 0;
const v13 = v9.push(v4);
// v13 = .integer
const v14 = v12 + 1;
// v14 = .primitive
v12 = v14;
const v15 = new Int32Array(v9);
// v15 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
}
%NeverOptimizeFunction(main);
main();

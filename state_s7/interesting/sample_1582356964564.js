function main() {
const v2 = 2.2250738585072014e-308 / 9007199254740991;
// v2 = .number
const v3 = [v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v12 = new Int8Array(v3);
// v12 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

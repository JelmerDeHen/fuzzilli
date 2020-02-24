function main() {
const v2 = "species" == gc;
// v2 = .boolean
const v3 = gc();
// v3 = .undefined
let v6 = 0;
const v10 = !v6;
// v10 = .boolean
v6 = v10;
const v11 = typeof v3;
// v11 = .string
const v13 = v11 === "function";
// v13 = .boolean
let v16 = 0;
const v23 = new Int8Array(1337);
// v23 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
v23.constructor = Float64Array;
const v26 = v23.slice(-268435456,1337);
// v26 = .object(ofGroup: Int8Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["find", "filter", "reverse", "sort", "map", "entries", "every", "set", "reduce", "findIndex", "join", "lastIndexOf", "keys", "forEach", "includes", "some", "subarray", "reduceRight", "values", "fill", "copyWithin", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();

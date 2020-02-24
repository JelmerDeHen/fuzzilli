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
// v23 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
v23.constructor = Float64Array;
const v26 = v23.slice(-268435456,1337);
// v26 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["findIndex", "copyWithin", "keys", "subarray", "indexOf", "some", "reverse", "reduce", "slice", "fill", "sort", "entries", "join", "lastIndexOf", "includes", "every", "values", "reduceRight", "map", "filter", "find", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();

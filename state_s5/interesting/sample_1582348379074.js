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
// v23 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
v23.constructor = Float64Array;
const v26 = v23.slice(-268435456,1337);
// v26 = .object(ofGroup: Int8Array, withProperties: ["constructor", "byteOffset", "length", "__proto__", "byteLength", "buffer"], withMethods: ["join", "entries", "reduce", "fill", "reduceRight", "slice", "reverse", "findIndex", "set", "sort", "every", "copyWithin", "includes", "indexOf", "filter", "keys", "subarray", "find", "forEach", "map", "lastIndexOf", "some", "values"])
}
%NeverOptimizeFunction(main);
main();

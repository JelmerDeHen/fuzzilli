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
// v23 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
v23.constructor = Float64Array;
const v26 = v23.slice(-268435456,1337);
// v26 = .object(ofGroup: Int8Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "length", "constructor"], withMethods: ["entries", "reduce", "forEach", "subarray", "some", "copyWithin", "find", "indexOf", "filter", "map", "findIndex", "join", "fill", "sort", "keys", "every", "set", "includes", "reduceRight", "lastIndexOf", "slice", "values", "reverse"])
}
%NeverOptimizeFunction(main);
main();

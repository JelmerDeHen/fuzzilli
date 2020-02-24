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
// v23 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
v23.constructor = Float64Array;
const v26 = v23.slice(-268435456,1337);
// v26 = .object(ofGroup: Int8Array, withProperties: ["buffer", "constructor", "byteOffset", "length", "__proto__", "byteLength"], withMethods: ["indexOf", "reduce", "join", "map", "lastIndexOf", "every", "findIndex", "forEach", "entries", "values", "fill", "includes", "reverse", "slice", "filter", "sort", "find", "keys", "copyWithin", "set", "some", "subarray", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();

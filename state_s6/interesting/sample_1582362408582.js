function main() {
const v3 = new Uint16Array(128);
// v3 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v3.constructor = Int8Array;
const v5 = v3.slice(16,128);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["some", "slice", "values", "filter", "subarray", "forEach", "join", "includes", "lastIndexOf", "find", "map", "keys", "indexOf", "sort", "findIndex", "reverse", "copyWithin", "every", "entries", "reduce", "reduceRight", "fill", "set"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = new Uint32Array(637);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
const v5 = new Uint32Array(v2);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
v5.constructor = Int32Array;
const v11 = v5.slice(-2147483649,1337);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "byteLength", "length"], withMethods: ["map", "forEach", "sort", "includes", "indexOf", "findIndex", "join", "find", "reduce", "subarray", "reduceRight", "values", "slice", "fill", "set", "reverse", "some", "keys", "every", "lastIndexOf", "filter", "entries", "copyWithin"])
let v14 = 0;
let v17 = 0;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = v17 + 1;
// v22 = .primitive
v17 = v22;
const v23 = v14 + 1;
// v23 = .primitive
v14 = v23;
}
%NeverOptimizeFunction(main);
main();

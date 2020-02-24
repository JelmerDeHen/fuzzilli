function main() {
const v3 = new Float32Array(60506);
// v3 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
let v6 = 0;
const v7 = v3 + 1;
// v7 = .primitive
v6 = v7;
const v9 = new Int8Array("size");
// v9 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v11 = new Int32Array(v9);
// v11 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
const v12 = v11.set(v9);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();

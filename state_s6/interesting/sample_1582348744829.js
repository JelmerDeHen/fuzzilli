function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v7 = new Float64Array(128);
// v7 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
v7.constructor = Int16Array;
const v10 = v7.slice(16,1337);
// v10 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "buffer", "__proto__"], withMethods: ["set", "reduceRight", "some", "join", "subarray", "filter", "every", "values", "fill", "indexOf", "findIndex", "sort", "reverse", "forEach", "find", "includes", "map", "lastIndexOf", "reduce", "copyWithin", "keys", "entries", "slice"])
}
%NeverOptimizeFunction(main);
main();

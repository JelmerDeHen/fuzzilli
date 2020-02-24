function main() {
const v6 = new Int16Array(19873);
// v6 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
const v7 = new Int32Array(v6);
// v7 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
const v12 = v7.includes(v11,6);
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();

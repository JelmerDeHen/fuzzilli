function main() {
const v2 = new Int16Array(512);
// v2 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
const v3 = v2.fill();
// v3 = .undefined
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
}
%NeverOptimizeFunction(main);
main();

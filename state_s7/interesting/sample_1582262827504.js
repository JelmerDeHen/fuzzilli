function main() {
const v2 = new Int16Array(512);
// v2 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v3 = v2.fill();
// v3 = .undefined
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
}
%NeverOptimizeFunction(main);
main();

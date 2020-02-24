function main() {
let v1 = 1337;
const v4 = new Int16Array(57294);
// v4 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
v4[64] = v1;
}
%NeverOptimizeFunction(main);
main();

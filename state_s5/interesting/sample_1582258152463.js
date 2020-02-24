function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v14 = new Int16Array(19873);
// v14 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
Array[1337] = Array;
Array[127] = 127;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = new Uint8ClampedArray(61670);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
const v3 = v2.reverse();
// v3 = .undefined
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
}
%NeverOptimizeFunction(main);
main();

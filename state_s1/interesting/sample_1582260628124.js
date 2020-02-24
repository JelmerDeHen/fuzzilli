function main() {
const v2 = new Uint8ClampedArray(61670);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
const v3 = v2.reverse();
// v3 = .undefined
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
}
%NeverOptimizeFunction(main);
main();

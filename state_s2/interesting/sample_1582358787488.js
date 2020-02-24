function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
let v6 = 0;
v3.constructor = Int16Array;
const v9 = v3.slice(5,234126503);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "length", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "reverse", "reduce", "lastIndexOf", "sort", "join", "map", "keys", "find", "entries", "copyWithin", "slice", "forEach", "includes", "indexOf", "every", "set", "some", "values", "reduceRight", "fill", "filter", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

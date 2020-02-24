function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
let v6 = 0;
v3.constructor = Int16Array;
const v9 = v3.slice(5,234126503);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["some", "reverse", "find", "map", "keys", "findIndex", "filter", "every", "subarray", "indexOf", "join", "reduce", "values", "set", "entries", "forEach", "reduceRight", "slice", "lastIndexOf", "includes", "fill", "copyWithin", "sort"])
}
%NeverOptimizeFunction(main);
main();

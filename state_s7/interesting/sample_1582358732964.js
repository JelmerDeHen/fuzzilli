function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
let v6 = 0;
v3.constructor = Int16Array;
const v9 = v3.slice(5,234126503);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "byteLength", "length", "byteOffset", "constructor"], withMethods: ["map", "subarray", "forEach", "reduceRight", "join", "copyWithin", "findIndex", "entries", "every", "values", "find", "reduce", "some", "lastIndexOf", "reverse", "filter", "fill", "keys", "set", "sort", "includes", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();

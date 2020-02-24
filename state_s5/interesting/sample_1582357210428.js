function main() {
const v4 = new Float64Array(1337);
// v4 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
v4.constructor = Uint8Array;
const v6 = v4.slice(-883519.9502739046,1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "__proto__", "byteLength", "buffer", "byteOffset"], withMethods: ["slice", "includes", "entries", "keys", "map", "set", "join", "values", "forEach", "every", "reverse", "indexOf", "reduce", "lastIndexOf", "find", "sort", "copyWithin", "findIndex", "filter", "some", "subarray", "reduceRight", "fill"])
}
%NeverOptimizeFunction(main);
main();

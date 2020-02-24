function main() {
let v1 = 13.37;
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
v4.constructor = Uint32Array;
const v7 = v4.slice(-9007199254740993,1337);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "byteOffset", "__proto__", "buffer", "byteLength", "length"], withMethods: ["reduceRight", "subarray", "lastIndexOf", "values", "fill", "map", "reverse", "slice", "indexOf", "filter", "every", "some", "find", "forEach", "join", "findIndex", "keys", "copyWithin", "sort", "includes", "reduce", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();

function main() {
let v1 = 13.37;
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
v4.constructor = Uint32Array;
const v7 = v4.slice(-9007199254740993,1337);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "buffer", "length"], withMethods: ["keys", "reverse", "slice", "includes", "filter", "every", "find", "indexOf", "lastIndexOf", "entries", "join", "findIndex", "set", "values", "forEach", "subarray", "copyWithin", "reduceRight", "map", "reduce", "some", "sort", "fill"])
}
%NeverOptimizeFunction(main);
main();

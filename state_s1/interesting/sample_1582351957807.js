function main() {
let v1 = 13.37;
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
v4.constructor = Uint32Array;
const v7 = v4.slice(-9007199254740993,1337);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "forEach", "set", "reduce", "reduceRight", "map", "subarray", "find", "every", "findIndex", "filter", "indexOf", "fill", "includes", "join", "entries", "some", "keys", "lastIndexOf", "values", "slice", "sort", "reverse"])
}
%NeverOptimizeFunction(main);
main();

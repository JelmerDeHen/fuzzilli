function main() {
let v1 = 13.37;
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["copyWithin", "includes", "reduceRight", "reverse", "indexOf", "fill", "findIndex", "set", "subarray", "sort", "forEach", "slice", "entries", "filter", "join", "every", "some", "keys", "lastIndexOf", "reduce", "values", "find", "map"])
v4.constructor = Uint32Array;
const v7 = v4.slice(-9007199254740993,1337);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["sort", "filter", "set", "lastIndexOf", "entries", "some", "slice", "forEach", "reduce", "values", "findIndex", "copyWithin", "map", "includes", "reverse", "reduceRight", "join", "subarray", "fill", "keys", "every", "find", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

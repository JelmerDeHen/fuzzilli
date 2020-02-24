function main() {
let v1 = 13.37;
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
v4.constructor = Uint32Array;
const v7 = v4.slice(-9007199254740993,1337);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["some", "subarray", "lastIndexOf", "find", "filter", "findIndex", "slice", "indexOf", "map", "reduceRight", "join", "forEach", "every", "entries", "set", "copyWithin", "sort", "keys", "values", "reduce", "reverse", "includes", "fill"])
}
%NeverOptimizeFunction(main);
main();

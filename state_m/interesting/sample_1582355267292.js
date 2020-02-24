function main() {
let v1 = 13.37;
const v5 = new Uint32Array(128);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
v5.constructor = Uint8ClampedArray;
const v7 = v5.slice(v1,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "buffer", "constructor", "byteOffset", "__proto__", "length"], withMethods: ["reverse", "find", "values", "some", "findIndex", "every", "reduce", "entries", "set", "forEach", "keys", "fill", "slice", "includes", "map", "reduceRight", "lastIndexOf", "sort", "filter", "subarray", "join", "copyWithin", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

function main() {
let v1 = 13.37;
const v5 = new Uint32Array(65535);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
v5.constructor = Uint8ClampedArray;
const v7 = v5.slice(v1,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteLength", "__proto__", "byteOffset", "length", "constructor"], withMethods: ["indexOf", "entries", "some", "fill", "filter", "reduceRight", "forEach", "keys", "copyWithin", "map", "every", "subarray", "reduce", "join", "values", "lastIndexOf", "sort", "set", "slice", "find", "findIndex", "reverse", "includes"])
}
%NeverOptimizeFunction(main);
main();

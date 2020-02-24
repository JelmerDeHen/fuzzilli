function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v14 = new Uint16Array(1337);
// v14 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
v14.constructor = Int8Array;
const v16 = v14.slice(13.37,1337);
// v16 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "buffer", "length", "constructor", "byteLength", "__proto__"], withMethods: ["subarray", "reduceRight", "indexOf", "find", "sort", "slice", "filter", "reduce", "join", "includes", "keys", "map", "entries", "set", "some", "reverse", "findIndex", "lastIndexOf", "values", "every", "copyWithin", "fill", "forEach"])
}
%NeverOptimizeFunction(main);
main();

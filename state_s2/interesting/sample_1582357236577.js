function main() {
let v5 = 0;
const v7 = new Uint16Array(1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
v7.constructor = Int32Array;
const v8 = v7.slice(Int32Array,100);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "buffer", "length", "constructor", "byteLength", "__proto__"], withMethods: ["subarray", "reduceRight", "indexOf", "find", "sort", "slice", "filter", "reduce", "join", "includes", "keys", "map", "entries", "set", "some", "reverse", "findIndex", "lastIndexOf", "values", "every", "copyWithin", "fill", "forEach"])
let v11 = 0;
}
%NeverOptimizeFunction(main);
main();

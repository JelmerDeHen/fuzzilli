function main() {
let v5 = 0;
const v7 = new Uint16Array(1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
v7.constructor = Int32Array;
const v8 = v7.slice(Int32Array,100);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["length", "buffer", "__proto__", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "entries", "subarray", "join", "values", "every", "lastIndexOf", "includes", "keys", "fill", "findIndex", "indexOf", "reverse", "some", "sort", "reduce", "reduceRight", "forEach", "find", "slice", "map", "filter", "set"])
let v11 = 0;
}
%NeverOptimizeFunction(main);
main();

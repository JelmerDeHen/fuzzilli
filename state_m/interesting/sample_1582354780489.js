function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = new Uint16Array(1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
v7.constructor = Float32Array;
const v10 = v7.slice(-2538985663,8);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["length", "buffer", "__proto__", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "entries", "subarray", "join", "values", "every", "lastIndexOf", "includes", "keys", "fill", "findIndex", "indexOf", "reverse", "some", "sort", "reduce", "reduceRight", "forEach", "find", "slice", "map", "filter", "set"])
}
%NeverOptimizeFunction(main);
main();

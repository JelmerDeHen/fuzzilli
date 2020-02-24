function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = new Uint16Array(1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
v7.constructor = Float32Array;
const v10 = v7.slice(-2538985663,8);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["reduceRight", "indexOf", "every", "fill", "reverse", "sort", "copyWithin", "entries", "set", "join", "values", "forEach", "filter", "some", "map", "reduce", "slice", "find", "findIndex", "includes", "subarray", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();

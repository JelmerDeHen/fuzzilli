function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = new Uint16Array(1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
v7.constructor = Float32Array;
const v10 = v7.slice(-2538985663,8);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["find", "sort", "entries", "some", "values", "forEach", "includes", "indexOf", "reduceRight", "copyWithin", "join", "lastIndexOf", "every", "filter", "keys", "subarray", "fill", "map", "slice", "reduce", "set", "findIndex", "reverse"])
}
%NeverOptimizeFunction(main);
main();

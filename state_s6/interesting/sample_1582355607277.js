function main() {
let v2 = 0;
const v4 = v2 + 1;
// v4 = .primitive
v2 = v4;
const v11 = new Uint16Array(1337);
// v11 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v11.constructor = Float32Array;
const v13 = v11.slice(13.37,1337);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["some", "slice", "values", "filter", "subarray", "forEach", "join", "includes", "lastIndexOf", "find", "map", "keys", "indexOf", "sort", "findIndex", "reverse", "copyWithin", "every", "entries", "reduce", "reduceRight", "fill", "set"])
}
%NeverOptimizeFunction(main);
main();

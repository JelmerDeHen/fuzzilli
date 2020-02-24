function main() {
let v2 = 0;
const v4 = v2 + 1;
// v4 = .primitive
v2 = v4;
const v11 = new Uint16Array(1337);
// v11 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
v11.constructor = Float32Array;
const v13 = v11.slice(13.37,1337);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["find", "sort", "entries", "some", "values", "forEach", "includes", "indexOf", "reduceRight", "copyWithin", "join", "lastIndexOf", "every", "filter", "keys", "subarray", "fill", "map", "slice", "reduce", "set", "findIndex", "reverse"])
}
%NeverOptimizeFunction(main);
main();

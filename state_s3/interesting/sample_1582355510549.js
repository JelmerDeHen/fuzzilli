function main() {
let v2 = 255;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = new Uint16Array(65537);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
v7.constructor = Int16Array;
const v9 = v7.slice(v7,483765007);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["reduceRight", "indexOf", "every", "fill", "reverse", "sort", "copyWithin", "entries", "set", "join", "values", "forEach", "filter", "some", "map", "reduce", "slice", "find", "findIndex", "includes", "subarray", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();

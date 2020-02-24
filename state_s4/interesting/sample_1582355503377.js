function main() {
let v2 = 255;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = new Uint16Array(65537);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
v7.constructor = Int16Array;
const v9 = v7.slice(v7,483765007);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "length", "byteOffset", "byteLength", "constructor"], withMethods: ["findIndex", "subarray", "values", "slice", "entries", "sort", "filter", "includes", "every", "some", "reduceRight", "reverse", "fill", "forEach", "copyWithin", "set", "join", "keys", "find", "lastIndexOf", "reduce", "indexOf", "map"])
}
%NeverOptimizeFunction(main);
main();

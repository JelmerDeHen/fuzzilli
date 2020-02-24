function main() {
let v2 = 255;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = new Uint16Array(65537);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
v7.constructor = Int16Array;
const v9 = v7.slice(v7,483765007);
// v9 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["reduce", "lastIndexOf", "includes", "keys", "subarray", "some", "join", "slice", "filter", "copyWithin", "findIndex", "find", "map", "reduceRight", "every", "sort", "entries", "set", "reverse", "forEach", "values", "fill", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

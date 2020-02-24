function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v14 = new Uint16Array(1337);
// v14 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
v14.constructor = Int8Array;
const v16 = v14.slice(13.37,1337);
// v16 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "length", "constructor", "byteOffset", "__proto__", "byteLength"], withMethods: ["subarray", "indexOf", "join", "slice", "lastIndexOf", "find", "forEach", "sort", "values", "fill", "set", "reverse", "keys", "reduce", "reduceRight", "findIndex", "copyWithin", "map", "some", "filter", "includes", "entries", "every"])
}
%NeverOptimizeFunction(main);
main();

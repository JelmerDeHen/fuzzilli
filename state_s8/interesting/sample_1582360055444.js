function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v14 = new Uint16Array(1337);
// v14 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
v14.constructor = Int8Array;
const v16 = v14.slice(13.37,1337);
// v16 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer", "length", "constructor"], withMethods: ["fill", "forEach", "lastIndexOf", "findIndex", "join", "indexOf", "copyWithin", "keys", "map", "set", "reverse", "includes", "filter", "find", "every", "reduceRight", "values", "sort", "some", "reduce", "entries", "slice", "subarray"])
}
%NeverOptimizeFunction(main);
main();

function main() {
let v5 = 0;
const v6 = new Int16Array(1337);
// v6 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
v6.constructor = Uint32Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "byteLength", "byteOffset", "__proto__", "constructor"], withMethods: ["fill", "reverse", "forEach", "map", "find", "set", "copyWithin", "findIndex", "indexOf", "filter", "slice", "subarray", "reduce", "entries", "keys", "includes", "some", "sort", "every", "reduceRight", "values", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

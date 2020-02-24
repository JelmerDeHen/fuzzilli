function main() {
let v5 = 0;
const v6 = new Int16Array(1337);
// v6 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
v6.constructor = Uint32Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int16Array, withProperties: ["constructor", "length", "byteLength", "byteOffset", "buffer", "__proto__"], withMethods: ["some", "sort", "fill", "find", "includes", "set", "every", "lastIndexOf", "copyWithin", "forEach", "reduce", "entries", "findIndex", "reverse", "keys", "filter", "indexOf", "map", "subarray", "reduceRight", "join", "values", "slice"])
}
%NeverOptimizeFunction(main);
main();

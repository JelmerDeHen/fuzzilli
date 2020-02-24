function main() {
const v4 = new Float32Array(1337);
// v4 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
const v6 = new Uint8Array(v4);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
const v7 = v6.indexOf(13.37,4177783630);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = new Uint8Array(61060);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
let v5 = 0;
const v7 = new Uint32Array(Set);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
const v8 = v3.set(v7,v5);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

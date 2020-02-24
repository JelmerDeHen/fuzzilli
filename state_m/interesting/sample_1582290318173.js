function main() {
const v3 = new Uint8Array(61060);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
let v5 = 0;
const v7 = new Uint32Array(Set);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
const v8 = v3.set(v7,v5);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

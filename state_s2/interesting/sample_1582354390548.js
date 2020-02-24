function main() {
const v3 = new Uint8Array(Boolean);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
v3.constructor = Int16Array;
const v5 = v3.slice(v3,255);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteOffset", "constructor", "byteLength", "length", "__proto__"], withMethods: ["values", "fill", "forEach", "reduceRight", "lastIndexOf", "join", "every", "subarray", "reverse", "some", "keys", "copyWithin", "indexOf", "includes", "findIndex", "find", "sort", "map", "reduce", "filter", "slice", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();

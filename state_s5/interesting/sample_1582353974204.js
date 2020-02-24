function main() {
let v1 = 10;
const v4 = new Uint32Array(v1);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
v4.constructor = Int8Array;
const v7 = v4.slice(5,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["values", "copyWithin", "slice", "every", "map", "filter", "keys", "entries", "find", "subarray", "sort", "findIndex", "includes", "forEach", "reduceRight", "set", "join", "some", "indexOf", "lastIndexOf", "fill", "reduce", "reverse"])
}
%NeverOptimizeFunction(main);
main();

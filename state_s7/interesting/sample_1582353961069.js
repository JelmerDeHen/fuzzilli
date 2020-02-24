function main() {
let v1 = 10;
const v4 = new Uint32Array(v1);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
v4.constructor = Int8Array;
const v7 = v4.slice(-3626034399,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["length", "__proto__", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["find", "copyWithin", "includes", "reverse", "map", "slice", "join", "lastIndexOf", "sort", "findIndex", "indexOf", "set", "keys", "filter", "some", "subarray", "forEach", "fill", "entries", "values", "reduce", "reduceRight", "every"])
}
%NeverOptimizeFunction(main);
main();

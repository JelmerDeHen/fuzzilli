function main() {
let v1 = 4294967295;
const v4 = new Uint32Array(257);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
v4[1] = v1;
}
%NeverOptimizeFunction(main);
main();

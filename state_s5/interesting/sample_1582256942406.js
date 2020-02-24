function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = new Uint32Array(31880);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
v6[1] = v2;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = {constructor:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v3 = new Uint32Array(v1);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
const v4 = v3.reverse();
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();

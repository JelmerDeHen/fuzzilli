function main() {
const v2 = new Int16Array(1);
// v2 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v4 = new Float64Array(v2);
// v4 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
}
%NeverOptimizeFunction(main);
main();

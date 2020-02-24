function main() {
let v3 = 0;
const v11 = {a:eval,length:3};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v13 = new Int32Array(v11);
// v13 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
v13[1] = 13.37;
}
%NeverOptimizeFunction(main);
main();

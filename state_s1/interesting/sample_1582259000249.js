function main() {
let v3 = 0;
const v11 = {a:eval,length:3};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v13 = new Int32Array(v11);
// v13 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
v13[1] = 13.37;
}
%NeverOptimizeFunction(main);
main();

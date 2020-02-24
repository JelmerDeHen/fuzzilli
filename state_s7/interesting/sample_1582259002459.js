function main() {
let v3 = 0;
const v11 = {a:eval,length:3};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v13 = new Int32Array(v11);
// v13 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
v13[1] = 13.37;
}
%NeverOptimizeFunction(main);
main();

function main() {
let v3 = 0;
const v11 = {a:eval,length:3};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a"])
const v13 = new Int32Array(v11);
// v13 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
v13[1] = 13.37;
}
%NeverOptimizeFunction(main);
main();

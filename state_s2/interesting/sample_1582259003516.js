function main() {
let v3 = 0;
const v11 = {a:eval,length:3};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v13 = new Int32Array(v11);
// v13 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
v13[1] = 13.37;
}
%NeverOptimizeFunction(main);
main();

function main() {
let v3 = undefined;
const v5 = new Float64Array(19873);
// v5 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
const v6 = v5.fill(Float64Array,v3,1337);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();

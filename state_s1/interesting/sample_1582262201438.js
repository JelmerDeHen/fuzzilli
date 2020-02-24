function main() {
let v3 = undefined;
const v5 = new Float64Array(19873);
// v5 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
const v6 = v5.fill(Float64Array,v3,1337);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();

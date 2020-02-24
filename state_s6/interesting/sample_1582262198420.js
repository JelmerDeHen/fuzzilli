function main() {
let v3 = undefined;
const v5 = new Float64Array(19873);
// v5 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v6 = v5.fill(Float64Array,v3,1337);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();

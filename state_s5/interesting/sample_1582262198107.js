function main() {
let v3 = undefined;
const v5 = new Float64Array(19873);
// v5 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
const v6 = v5.fill(Float64Array,v3,1337);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();

function main() {
let v3 = undefined;
const v5 = new Float64Array(19873);
// v5 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
const v6 = v5.fill(Float64Array,v3,1337);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();

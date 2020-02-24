function main() {
let v1 = Number;
let v4 = v1;
const v7 = new Float32Array(19873);
// v7 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
const v8 = v7.fill(Float64Array,v4,1337);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

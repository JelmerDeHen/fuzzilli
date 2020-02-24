function main() {
let v1 = Number;
let v4 = v1;
const v7 = new Float32Array(19873);
// v7 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
const v8 = v7.fill(Float64Array,v4,1337);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

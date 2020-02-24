function main() {
let v1 = Number;
let v4 = v1;
const v7 = new Float32Array(19873);
// v7 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
const v8 = v7.fill(Float64Array,v4,1337);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

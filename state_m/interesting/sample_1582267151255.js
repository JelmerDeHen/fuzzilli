function main() {
let v1 = Number;
let v4 = v1;
const v7 = new Float32Array(19873);
// v7 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
const v8 = v7.fill(Float64Array,v4,1337);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

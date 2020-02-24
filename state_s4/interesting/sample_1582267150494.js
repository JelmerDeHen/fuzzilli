function main() {
let v1 = Number;
let v4 = v1;
const v7 = new Float32Array(19873);
// v7 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
const v8 = v7.fill(Float64Array,v4,1337);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();

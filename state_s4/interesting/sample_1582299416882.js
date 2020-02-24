function main() {
const v2 = new Float64Array(Float64Array);
// v2 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
let v3 = v2;
const v6 = new Proxy(v3,Object);
// v6 = .unknown
for (const v7 in v6) {
}
}
%NeverOptimizeFunction(main);
main();

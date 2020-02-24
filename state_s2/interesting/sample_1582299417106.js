function main() {
const v2 = new Float64Array(Float64Array);
// v2 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
let v3 = v2;
const v6 = new Proxy(v3,Object);
// v6 = .unknown
for (const v7 in v6) {
}
}
%NeverOptimizeFunction(main);
main();

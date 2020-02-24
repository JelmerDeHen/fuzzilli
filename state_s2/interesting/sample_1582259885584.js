function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v7 = new Float64Array(0);
// v7 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
let v10 = 0;
const v11 = v7.copyWithin(0,1337);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();

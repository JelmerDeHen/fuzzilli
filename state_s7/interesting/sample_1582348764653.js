function main() {
let v5 = 0;
const v6 = new Int16Array(1337);
// v6 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
v6.constructor = Uint32Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "__proto__", "constructor", "byteOffset", "byteLength"], withMethods: ["values", "reverse", "filter", "slice", "lastIndexOf", "reduce", "reduceRight", "map", "findIndex", "sort", "every", "some", "keys", "copyWithin", "set", "includes", "find", "indexOf", "forEach", "subarray", "join", "fill", "entries"])
}
%NeverOptimizeFunction(main);
main();

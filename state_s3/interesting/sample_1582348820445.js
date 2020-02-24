function main() {
let v5 = 0;
const v6 = new Int16Array(1337);
// v6 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
v6.constructor = Uint32Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "byteLength", "byteOffset", "length"], withMethods: ["keys", "reduceRight", "every", "forEach", "slice", "find", "set", "findIndex", "fill", "entries", "map", "reduce", "lastIndexOf", "includes", "indexOf", "values", "sort", "reverse", "filter", "subarray", "copyWithin", "join", "some"])
}
%NeverOptimizeFunction(main);
main();

function main() {
let v2 = 0;
const v6 = new Int32Array(64);
// v6 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
v6.constructor = Uint8Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int32Array, withProperties: ["length", "constructor", "byteOffset", "__proto__", "buffer", "byteLength"], withMethods: ["forEach", "reduce", "reverse", "slice", "subarray", "map", "find", "join", "lastIndexOf", "includes", "copyWithin", "sort", "some", "indexOf", "entries", "every", "filter", "fill", "findIndex", "keys", "set", "reduceRight", "values"])
const v10 = v2 + 1;
// v10 = .primitive
v2 = v10;
}
%NeverOptimizeFunction(main);
main();

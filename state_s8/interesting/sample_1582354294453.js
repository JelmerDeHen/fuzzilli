function main() {
let v2 = 0;
const v6 = new Int32Array(64);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
v6.constructor = Uint8Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int32Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["map", "subarray", "lastIndexOf", "every", "forEach", "indexOf", "find", "filter", "copyWithin", "includes", "keys", "reduce", "entries", "fill", "values", "findIndex", "some", "join", "reduceRight", "slice", "set", "sort", "reverse"])
const v10 = v2 + 1;
// v10 = .primitive
v2 = v10;
}
%NeverOptimizeFunction(main);
main();

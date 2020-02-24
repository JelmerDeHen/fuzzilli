function main() {
let v5 = 0;
const v7 = new Uint16Array(1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
v7.constructor = Int32Array;
const v8 = v7.slice(Int32Array,100);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer", "length", "constructor"], withMethods: ["fill", "forEach", "lastIndexOf", "findIndex", "join", "indexOf", "copyWithin", "keys", "map", "set", "reverse", "includes", "filter", "find", "every", "reduceRight", "values", "sort", "some", "reduce", "entries", "slice", "subarray"])
let v11 = 0;
}
%NeverOptimizeFunction(main);
main();

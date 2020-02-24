function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v8 = new Uint16Array(8);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v8.constructor = Uint8ClampedArray;
const v10 = v8.slice(v8,1337);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["some", "slice", "values", "filter", "subarray", "forEach", "join", "includes", "lastIndexOf", "find", "map", "keys", "indexOf", "sort", "findIndex", "reverse", "copyWithin", "every", "entries", "reduce", "reduceRight", "fill", "set"])
}
%NeverOptimizeFunction(main);
main();

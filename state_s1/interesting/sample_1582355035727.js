function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v8 = new Uint16Array(8);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
v8.constructor = Uint8ClampedArray;
const v10 = v8.slice(v8,1337);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "length", "constructor", "byteOffset", "__proto__", "byteLength"], withMethods: ["subarray", "indexOf", "join", "slice", "lastIndexOf", "find", "forEach", "sort", "values", "fill", "set", "reverse", "keys", "reduce", "reduceRight", "findIndex", "copyWithin", "map", "some", "filter", "includes", "entries", "every"])
}
%NeverOptimizeFunction(main);
main();

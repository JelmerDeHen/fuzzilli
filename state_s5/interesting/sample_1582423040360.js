function main() {
const v3 = new Int16Array(1337);
// v3 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v5 = v3.slice(13.37,128);
// v5 = .object(ofGroup: Int16Array, withProperties: ["length", "byteOffset", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["keys", "entries", "filter", "findIndex", "every", "sort", "join", "copyWithin", "lastIndexOf", "find", "slice", "reduceRight", "some", "reverse", "map", "set", "reduce", "forEach", "values", "fill", "indexOf", "subarray", "includes"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = v5.fill(1337);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();

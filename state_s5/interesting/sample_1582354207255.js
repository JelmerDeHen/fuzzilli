function main() {
const v3 = new Int16Array(64);
// v3 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
v3.constructor = Uint16Array;
const v6 = v3.slice(10,1337);
// v6 = .object(ofGroup: Int16Array, withProperties: ["length", "byteOffset", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["keys", "entries", "filter", "findIndex", "every", "sort", "join", "copyWithin", "lastIndexOf", "find", "slice", "reduceRight", "some", "reverse", "map", "set", "reduce", "forEach", "values", "fill", "indexOf", "subarray", "includes"])
const v8 = {__proto__:536870912};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();

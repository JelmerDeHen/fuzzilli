function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = new Uint32Array(v1);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
v4.constructor = Uint16Array;
const v7 = v4.slice(-2147483649,1337);
// v7 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteLength", "__proto__", "byteOffset", "length", "constructor"], withMethods: ["indexOf", "entries", "some", "fill", "filter", "reduceRight", "forEach", "keys", "copyWithin", "map", "every", "subarray", "reduce", "join", "values", "lastIndexOf", "sort", "set", "slice", "find", "findIndex", "reverse", "includes"])
}
%NeverOptimizeFunction(main);
main();

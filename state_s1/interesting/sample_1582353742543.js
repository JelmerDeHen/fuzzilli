function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = new Uint16Array(v1);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
v4.constructor = Uint8Array;
const v6 = v4.slice(-1024,13.37);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "length", "constructor", "byteOffset", "__proto__", "byteLength"], withMethods: ["subarray", "indexOf", "join", "slice", "lastIndexOf", "find", "forEach", "sort", "values", "fill", "set", "reverse", "keys", "reduce", "reduceRight", "findIndex", "copyWithin", "map", "some", "filter", "includes", "entries", "every"])
}
%NeverOptimizeFunction(main);
main();

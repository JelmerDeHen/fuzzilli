function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = new Uint16Array(v1);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
v5.constructor = Uint8Array;
const v7 = v5.slice(-1024,-3.0);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["find", "sort", "entries", "some", "values", "forEach", "includes", "indexOf", "reduceRight", "copyWithin", "join", "lastIndexOf", "every", "filter", "keys", "subarray", "fill", "map", "slice", "reduce", "set", "findIndex", "reverse"])
}
%NeverOptimizeFunction(main);
main();

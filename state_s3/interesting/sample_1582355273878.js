function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = new Set(v2);
// v3 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["entries", "has", "values", "add", "delete", "forEach", "keys", "clear"])
const v4 = v3.entries();
// v4 = .object()
const v11 = new Uint32Array(1024);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
v11.constructor = Uint16Array;
const v14 = v11.slice(-2147483649,1337);
// v14 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "constructor", "buffer", "__proto__", "length", "byteOffset"], withMethods: ["slice", "findIndex", "some", "copyWithin", "indexOf", "values", "includes", "forEach", "map", "sort", "entries", "filter", "every", "reduce", "reverse", "subarray", "reduceRight", "set", "join", "keys", "fill", "find", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337,1337,1337,1337,eval];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = new Uint8ClampedArray(512);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
v6.constructor = Uint32Array;
const v8 = v6.slice(v2,1337);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__", "constructor", "length"], withMethods: ["fill", "reverse", "indexOf", "forEach", "reduceRight", "values", "findIndex", "sort", "filter", "every", "reduce", "lastIndexOf", "keys", "subarray", "includes", "copyWithin", "entries", "map", "set", "some", "join", "find", "slice"])
}
%NeverOptimizeFunction(main);
main();

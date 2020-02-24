function main() {
const v2 = [3,1337,1337,3];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = new Uint16Array(v2);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
v5.constructor = Int32Array;
const v7 = v5.slice(Int32Array,1000);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "length", "byteOffset", "byteLength", "constructor"], withMethods: ["findIndex", "subarray", "values", "slice", "entries", "sort", "filter", "includes", "every", "some", "reduceRight", "reverse", "fill", "forEach", "copyWithin", "set", "join", "keys", "find", "lastIndexOf", "reduce", "indexOf", "map"])
}
%NeverOptimizeFunction(main);
main();

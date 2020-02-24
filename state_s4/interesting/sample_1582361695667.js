function main() {
const v2 = [13.37,13.37,9007199254740992,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v3 = v2;
const v6 = new Float32Array(v3);
// v6 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
v6.constructor = Int16Array;
const v9 = v6.slice(-9007199254740993,1337);
// v9 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["subarray", "slice", "findIndex", "reverse", "sort", "includes", "some", "values", "indexOf", "every", "fill", "map", "set", "copyWithin", "keys", "forEach", "reduce", "entries", "reduceRight", "lastIndexOf", "find", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();

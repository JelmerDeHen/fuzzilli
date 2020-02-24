function main() {
const v2 = [1337,1337,1337,1337,"d"];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = new Uint8Array(1337);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
v6.constructor = Float32Array;
const v8 = v6.slice(v2,1000);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["some", "subarray", "lastIndexOf", "find", "filter", "findIndex", "slice", "indexOf", "map", "reduceRight", "join", "forEach", "every", "entries", "set", "copyWithin", "sort", "keys", "values", "reduce", "reverse", "includes", "fill"])
}
%NeverOptimizeFunction(main);
main();

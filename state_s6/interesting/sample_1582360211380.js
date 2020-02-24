function main() {
const v1 = [255];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
const v6 = new Float64Array(v2);
// v6 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
v6.constructor = Uint8ClampedArray;
const v8 = v6.slice(Uint8Array,1000);
// v8 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "buffer", "__proto__"], withMethods: ["set", "reduceRight", "some", "join", "subarray", "filter", "every", "values", "fill", "indexOf", "findIndex", "sort", "reverse", "forEach", "find", "includes", "map", "lastIndexOf", "reduce", "copyWithin", "keys", "entries", "slice"])
}
%NeverOptimizeFunction(main);
main();

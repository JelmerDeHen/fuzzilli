function main() {
const v1 = [255];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
const v6 = new Float64Array(v2);
// v6 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "reverse", "fill", "forEach", "every", "copyWithin", "includes", "set", "some", "find", "slice", "subarray", "reduce", "values", "keys", "sort", "lastIndexOf", "entries", "indexOf", "filter", "join", "map"])
v6.constructor = Uint8ClampedArray;
const v8 = v6.slice(Uint8Array,1000);
// v8 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteLength", "length", "buffer", "byteOffset", "__proto__"], withMethods: ["keys", "reduceRight", "sort", "lastIndexOf", "forEach", "some", "map", "set", "reverse", "fill", "slice", "join", "values", "copyWithin", "findIndex", "filter", "find", "includes", "indexOf", "every", "subarray", "entries", "reduce"])
}
%NeverOptimizeFunction(main);
main();

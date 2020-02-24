function main() {
const v1 = [255];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
const v6 = new Float64Array(v2);
// v6 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
v6.constructor = Uint8ClampedArray;
const v8 = v6.slice(Uint8Array,1000);
// v8 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "length", "constructor", "byteLength", "__proto__"], withMethods: ["filter", "values", "reduceRight", "includes", "forEach", "fill", "indexOf", "find", "findIndex", "subarray", "reduce", "copyWithin", "sort", "map", "slice", "set", "keys", "entries", "every", "reverse", "some", "lastIndexOf", "join"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [255];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
const v6 = new Float64Array(v2);
// v6 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
v6.constructor = Uint8ClampedArray;
const v8 = v6.slice(Uint8Array,1000);
// v8 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["set", "reduce", "values", "fill", "map", "join", "subarray", "filter", "findIndex", "keys", "some", "reduceRight", "slice", "includes", "lastIndexOf", "copyWithin", "find", "forEach", "reverse", "sort", "entries", "every", "indexOf"])
}
%NeverOptimizeFunction(main);
main();

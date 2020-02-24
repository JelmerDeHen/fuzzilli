function main() {
const v1 = [255];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
const v6 = new Float64Array(v2);
// v6 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
v6.constructor = Uint8ClampedArray;
const v8 = v6.slice(Uint8Array,1000);
// v8 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "__proto__", "byteLength", "buffer", "byteOffset"], withMethods: ["slice", "includes", "entries", "keys", "map", "set", "join", "values", "forEach", "every", "reverse", "indexOf", "reduce", "lastIndexOf", "find", "sort", "copyWithin", "findIndex", "filter", "some", "subarray", "reduceRight", "fill"])
}
%NeverOptimizeFunction(main);
main();

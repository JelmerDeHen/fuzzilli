function main() {
const v3 = ["boolean",-199391297];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v4 = v3;
v4[127] = 1337;
const v6 = (1337)[-2147483647];
// v6 = .unknown
const v8 = new Float64Array(v4);
// v8 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
const v9 = v8.sort(v6);
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = {length:-65537,constructor:"symbol",c:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "c", "length"])
const v4 = {constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v8 = [v4,13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v9 = v8;
const v11 = ["qHZ9xy0D+R",-3.0,-3.0,"qHZ9xy0D+R",-3.0];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = v11[v9];
// v12 = .unknown
const v13 = new Float32Array(1337);
// v13 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
const v14 = v13.sort(v12);
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();

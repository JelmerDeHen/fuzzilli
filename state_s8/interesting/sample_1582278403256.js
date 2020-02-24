function main() {
const v3 = {length:-65537,constructor:"symbol",c:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "c"])
const v4 = {constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v8 = [v4,13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v9 = v8;
const v11 = ["qHZ9xy0D+R",-3.0,-3.0,"qHZ9xy0D+R",-3.0];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = v11[v9];
// v12 = .unknown
const v13 = new Float32Array(1337);
// v13 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
const v14 = v13.sort(v12);
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();

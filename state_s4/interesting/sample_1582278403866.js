function main() {
const v3 = {length:-65537,constructor:"symbol",c:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length", "constructor"])
const v4 = {constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v8 = [v4,13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v9 = v8;
const v11 = ["qHZ9xy0D+R",-3.0,-3.0,"qHZ9xy0D+R",-3.0];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = v11[v9];
// v12 = .unknown
const v13 = new Float32Array(1337);
// v13 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
const v14 = v13.sort(v12);
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();

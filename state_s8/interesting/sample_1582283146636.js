function main() {
const v1 = [4.0,4.0,4.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v6 = v5;
const v8 = [-1.0,v1,-1.0,"qHZ9xy0D+R",-1.0];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = v8[v6];
// v9 = .unknown
const v10 = new Float64Array(v8);
// v10 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
const v11 = v10.sort(v9);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();

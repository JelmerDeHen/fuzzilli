function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = {constructor:v1,valueOf:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor"])
let v3 = v2;
const v5 = {...v3};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf"])
const v6 = "replace" / v5;
// v6 = .number
const v9 = new Int32Array(13273);
// v9 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
const v10 = v9.includes(v6);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = {constructor:v1,valueOf:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor"])
let v3 = v2;
const v5 = {...v3};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor"])
const v6 = "replace" / v5;
// v6 = .number
const v9 = new Int32Array(13273);
// v9 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
const v10 = v9.includes(v6);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();

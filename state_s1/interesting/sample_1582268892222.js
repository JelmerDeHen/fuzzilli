function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = {constructor:v1,valueOf:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf"])
let v3 = v2;
const v5 = {...v3};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__"])
const v6 = "replace" / v5;
// v6 = .number
const v9 = new Int32Array(13273);
// v9 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
const v10 = v9.includes(v6);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();

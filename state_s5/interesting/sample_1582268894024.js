function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = {constructor:v1,valueOf:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf"])
let v3 = v2;
const v5 = {...v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf"])
const v6 = "replace" / v5;
// v6 = .number
const v9 = new Int32Array(13273);
// v9 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
const v10 = v9.includes(v6);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();

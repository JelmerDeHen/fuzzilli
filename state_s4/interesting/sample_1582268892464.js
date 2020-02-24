function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = {constructor:v1,valueOf:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor"])
let v3 = v2;
const v5 = {...v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf"])
const v6 = "replace" / v5;
// v6 = .number
const v9 = new Int32Array(13273);
// v9 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v10 = v9.includes(v6);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = [1337,v4,13.37,1024];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v11 = {...Number,...v10,...0};
// v11 = .object(ofGroup: Object, withProperties: ["MIN_VALUE", "prototype", "NEGATIVE_INFINITY", "MAX_VALUE", "POSITIVE_INFINITY", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER", "constructor", "length", "EPSILON", "NaN", "__proto__"], withMethods: ["keys", "isNaN", "isSafeInteger", "forEach", "isFinite", "isInteger", "some", "findIndex", "lastIndexOf", "flat", "map", "toString", "fill", "values", "copyWithin", "concat", "filter", "splice", "push", "find", "reduce", "pop", "every", "indexOf", "entries", "shift", "toLocaleString", "reverse", "unshift", "slice", "reduceRight", "flatMap", "sort", "includes", "join"])
}
%NeverOptimizeFunction(main);
main();

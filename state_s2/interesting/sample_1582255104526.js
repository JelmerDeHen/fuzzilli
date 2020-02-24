function main() {
const v1 = -4294967297 << -4294967297;
// v1 = .integer
v1[v1] = v1;
const v2 = v1 << v1;
// v2 = .integer
const v3 = {e:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v4 = v3[v3];
// v4 = .unknown
const v8 = [13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = v8 > v3;
// v11 = .boolean
const v27 = Object.values(v8);
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();

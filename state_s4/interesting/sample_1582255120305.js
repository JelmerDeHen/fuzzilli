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
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = v8 > v3;
// v11 = .boolean
const v27 = Object.values(v8);
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {c:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v3 = v1[1024];
// v3 = .unknown
let v6 = 0;
v6 = 13.37;
const v7 = {__proto__:3,constructor:v6,d:v2,valueOf:v3,length:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["d", "length", "constructor", "valueOf", "__proto__"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = -Infinity;
// v1 = .float
const v2 = [v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {constructor:-4294967295,length:1337,__proto__:v2};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v5 = v2.includes(v4,v2);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();

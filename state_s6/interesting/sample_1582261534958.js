function main() {
const v3 = [1.0];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {constructor:-4294967295,length:1337,__proto__:v3};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v7 = v3.includes(v5,1);
// v7 = .boolean
}
%NeverOptimizeFunction(main);
main();

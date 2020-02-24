function main() {
const v1 = -Infinity;
// v1 = .float
const v2 = [v1];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {constructor:-4294967295,length:1337,__proto__:v2};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v5 = v2.includes(v4,v2);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = -Infinity;
// v1 = .float
const v2 = [v1];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {constructor:-4294967295,length:1337,__proto__:v2};
// v4 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v5 = v2.includes(v4,v2);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();

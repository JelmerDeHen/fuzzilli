function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {constructor:-4294967295,length:1337,__proto__:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v6 = {a:-4294967295,e:13.37,length:"dVmqACI+Vs",length:v3,b:-4294967295};
// v6 = .object(ofGroup: Object, withProperties: ["a", "length", "e", "__proto__", "b"])
v3.length = 2;
for (const v11 in v5) {
}
}
%NeverOptimizeFunction(main);
main();

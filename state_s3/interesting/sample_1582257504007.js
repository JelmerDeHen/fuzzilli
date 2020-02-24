function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {constructor:-4294967295,length:1337,__proto__:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v6 = {a:-4294967295,e:13.37,length:"dVmqACI+Vs",length:v3,b:-4294967295};
// v6 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "b", "length"])
v3.length = 2;
for (const v11 in v5) {
}
}
%NeverOptimizeFunction(main);
main();

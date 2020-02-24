function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {constructor:-4294967295,length:1337,__proto__:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v6 = {a:-4294967295,e:13.37,length:"dVmqACI+Vs",length:v3,b:-4294967295};
// v6 = .object(ofGroup: Object, withProperties: ["b", "a", "e", "__proto__", "length"])
v3.length = 2;
for (const v11 in v5) {
}
}
%NeverOptimizeFunction(main);
main();

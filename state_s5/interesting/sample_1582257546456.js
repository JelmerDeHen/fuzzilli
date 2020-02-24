function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {constructor:-4294967295,length:1337,__proto__:v3};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v6 = {a:-4294967295,e:13.37,length:"dVmqACI+Vs",length:v3,b:-4294967295};
// v6 = .object(ofGroup: Object, withProperties: ["a", "e", "length", "__proto__", "b"])
v3.length = 2;
for (const v11 in v5) {
}
}
%NeverOptimizeFunction(main);
main();

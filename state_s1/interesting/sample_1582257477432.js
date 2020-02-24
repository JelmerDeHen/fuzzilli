function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {constructor:-4294967295,length:1337,__proto__:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v6 = {a:-4294967295,e:13.37,length:"dVmqACI+Vs",length:v3,b:-4294967295};
// v6 = .object(ofGroup: Object, withProperties: ["e", "a", "length", "__proto__", "b"])
v3.length = 2;
for (const v11 in v5) {
}
}
%NeverOptimizeFunction(main);
main();

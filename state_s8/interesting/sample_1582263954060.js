function main() {
let v1 = 13.37;
let v2 = v1;
const v5 = -Infinity;
// v5 = .float
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v9 = v8.toLocaleString("boolean",v2);
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();

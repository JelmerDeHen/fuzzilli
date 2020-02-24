function main() {
let v1 = 13.37;
let v2 = v1;
const v5 = -Infinity;
// v5 = .float
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v9 = v8.toLocaleString("boolean",v2);
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();

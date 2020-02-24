function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {valueOf:4294967295,a:v4,b:v4,toString:1337};
// v5 = .object(ofGroup: Object, withProperties: ["a", "b", "toString", "valueOf", "__proto__"])
v5[Boolean] = 13.37;
const v7 = Number[-536870912];
// v7 = .unknown
v5.valueOf = v7;
}
%NeverOptimizeFunction(main);
main();

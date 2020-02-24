function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {valueOf:4294967295,a:v4,b:v4,toString:1337};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "a", "b"])
v5[Boolean] = 13.37;
const v7 = Number[-536870912];
// v7 = .unknown
v5.valueOf = v7;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {valueOf:4294967295,a:v4,b:v4,toString:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "toString", "b", "valueOf"])
v5[Boolean] = 13.37;
const v7 = Number[-536870912];
// v7 = .unknown
v5.valueOf = v7;
}
%NeverOptimizeFunction(main);
main();

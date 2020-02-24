function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {valueOf:4294967295,a:v4,b:v4,toString:1337};
// v5 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "toString", "__proto__", "a"])
v5[Boolean] = 13.37;
const v7 = Number[-536870912];
// v7 = .unknown
v5.valueOf = v7;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {valueOf:4294967295,a:v4,b:v4,toString:1337};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "a", "__proto__", "toString"])
v5[Boolean] = 13.37;
const v7 = Number[-536870912];
// v7 = .unknown
v5.valueOf = v7;
}
%NeverOptimizeFunction(main);
main();

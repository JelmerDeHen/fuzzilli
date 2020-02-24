function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = v2[1024];
// v3 = .unknown
let v6 = 0;
Reflect.valueOf = v3;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
delete Reflect.valueOf;
}
%NeverOptimizeFunction(main);
main();

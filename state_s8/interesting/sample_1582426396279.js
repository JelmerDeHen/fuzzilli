function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {valueOf:13.37,c:v2,constructor:1337};
// v4 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__", "valueOf"])
const v5 = {valueOf:parseInt,c:13.37,length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c"], withMethods: ["valueOf"])
let v6 = v5;
const v9 = 2.2250738585072014e-308 / 65537;
// v9 = .number
const v10 = v6.valueOf(v4,v9,v4);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();

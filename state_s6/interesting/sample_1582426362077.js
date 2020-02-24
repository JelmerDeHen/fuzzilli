function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {valueOf:13.37,c:v2,constructor:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "c", "valueOf"])
const v5 = {valueOf:parseInt,c:13.37,length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length"], withMethods: ["valueOf"])
let v6 = v5;
const v9 = 2.2250738585072014e-308 / 65537;
// v9 = .number
const v10 = v6.valueOf(v4,v9,v4);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();

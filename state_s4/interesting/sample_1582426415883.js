function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {valueOf:13.37,c:v2,constructor:1337};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "valueOf"])
const v5 = {valueOf:parseInt,c:13.37,length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["c", "length", "__proto__"], withMethods: ["valueOf"])
let v6 = v5;
const v9 = 2.2250738585072014e-308 / 65537;
// v9 = .number
const v10 = v6.valueOf(v4,v9,v4);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();

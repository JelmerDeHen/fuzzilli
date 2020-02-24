function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {valueOf:13.37,c:v2,constructor:1337};
// v4 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "constructor", "__proto__"])
const v5 = {valueOf:parseInt,c:13.37,length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length"], withMethods: ["valueOf"])
let v6 = v5;
const v9 = 2.2250738585072014e-308 / 65537;
// v9 = .number
const v10 = v6.valueOf(v4,v9,v4);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();

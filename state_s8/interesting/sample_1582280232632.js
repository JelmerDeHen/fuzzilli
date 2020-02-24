function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {c:"a",e:1337,b:v3,valueOf:1337,a:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["c", "a", "b", "e", "__proto__", "valueOf"])
let v6 = 65536;
const v9 = ["EXkcpBKht7"];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
v9[127] = v6;
const v10 = v9.includes(v4,-2695425644);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();

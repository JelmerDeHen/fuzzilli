function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {d:v3,a:13.37,valueOf:DataView,__proto__:v4,length:v3,e:1337,constructor:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["a", "d", "valueOf", "constructor", "length", "__proto__", "e"])
const v7 = {a:isFinite};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
JSON[v5] = 13.37;
const v12 = JSON.stringify(JSON,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v13 = JSON.parse(v12,v7);
// v13 = .unknown
let v16 = 0;
}
%NeverOptimizeFunction(main);
main();

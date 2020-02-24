function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {d:v3,a:13.37,valueOf:DataView,__proto__:v4,length:v3,e:1337,constructor:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "length", "valueOf", "a", "e", "__proto__", "d"])
const v7 = {a:isFinite};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
JSON[v5] = 13.37;
const v12 = JSON.stringify(JSON,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v13 = JSON.parse(v12,v7);
// v13 = .unknown
let v16 = 0;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = {has:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has"])
const v14 = [1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = {valueOf:JSON,length:"search"};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf"])
JSON[v15] = 13.37;
const v19 = JSON.stringify(JSON,JSON,2153514987);
// v19 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v20 = JSON.parse(v19,Object);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();

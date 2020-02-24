function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = {has:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has"])
const v14 = [1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = {valueOf:JSON,length:"search"};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
JSON[v15] = 13.37;
const v19 = JSON.stringify(JSON,JSON,2153514987);
// v19 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v20 = JSON.parse(v19,Object);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();

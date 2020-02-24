function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = {has:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has"])
const v14 = [1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = {valueOf:JSON,length:"search"};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
JSON[v15] = 13.37;
const v19 = JSON.stringify(JSON,JSON,2153514987);
// v19 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v20 = JSON.parse(v19,Object);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();

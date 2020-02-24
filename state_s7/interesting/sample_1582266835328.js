function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v4 = {has:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has"])
const v14 = [1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = {valueOf:JSON,length:"search"};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
JSON[v15] = 13.37;
const v19 = JSON.stringify(JSON,JSON,2153514987);
// v19 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v20 = JSON.parse(v19,Object);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();

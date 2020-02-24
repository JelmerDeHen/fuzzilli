function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v4 = {has:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has"])
const v14 = [1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = {valueOf:JSON,length:"search"};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
JSON[v15] = 13.37;
const v19 = JSON.stringify(JSON,JSON,2153514987);
// v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v20 = JSON.parse(v19,Object);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
let v5 = 0;
let v8 = 0;
let v11 = 0;
const v16 = [1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v17 = {valueOf:JSON,length:"search"};
// v17 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
JSON[v17] = 13.37;
const v21 = JSON.stringify(JSON,JSON,2153514987);
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v22 = JSON.parse(v21,Object);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();

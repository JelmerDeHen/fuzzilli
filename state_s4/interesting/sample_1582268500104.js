function main() {
let v3 = 0;
const v7 = new Set("asyncIterator");
// v7 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "delete", "values", "has", "forEach", "add", "entries"])
let v9 = 0;
const v10 = ["symbol",...v7,v9];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v3 = v10;
const v11 = JSON.stringify(v3);
// v11 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
let v14 = 0;
const v15 = JSON.parse(v11,0);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();

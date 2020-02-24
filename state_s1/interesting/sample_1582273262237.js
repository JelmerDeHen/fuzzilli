function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v5 = 0;
const v8 = new Set("asyncIterator");
// v8 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
let v10 = 0;
const v11 = v1.__proto__;
// v11 = .object()
v10 = v11;
const v12 = [13.37,...v8,v10];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v5 = v12;
const v13 = JSON.stringify(v5);
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v14 = JSON.parse(v13,v13);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

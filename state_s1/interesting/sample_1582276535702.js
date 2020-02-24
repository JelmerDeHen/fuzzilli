function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = v1.__proto__;
// v2 = .object()
const v8 = {valueOf:JSON,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
JSON[v8] = v2;
const v12 = JSON.stringify(JSON,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = v1.__proto__;
// v2 = .object()
const v8 = {valueOf:JSON,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
JSON[v8] = v2;
const v12 = JSON.stringify(JSON,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

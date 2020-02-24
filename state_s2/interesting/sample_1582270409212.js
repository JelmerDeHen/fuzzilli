function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {a:1337,constructor:v4,valueOf:Float32Array,__proto__:1337,b:3570651021};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "constructor", "b"])
let v6 = v5;
const v8 = {valueOf:v6,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf"])
const v12 = JSON.stringify(v8,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

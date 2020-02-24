function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {a:1337,constructor:v4,valueOf:Float32Array,__proto__:1337,b:3570651021};
// v5 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__", "constructor", "valueOf"])
let v6 = v5;
const v8 = {valueOf:v6,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf"])
const v12 = JSON.stringify(v8,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

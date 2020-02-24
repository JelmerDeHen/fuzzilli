function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {a:1337,constructor:v4,valueOf:Float32Array,__proto__:1337,b:3570651021};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "b", "valueOf"])
let v6 = v5;
const v8 = {valueOf:v6,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
const v12 = JSON.stringify(v8,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

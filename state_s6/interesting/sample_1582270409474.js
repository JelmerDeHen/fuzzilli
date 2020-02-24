function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {a:1337,constructor:v4,valueOf:Float32Array,__proto__:1337,b:3570651021};
// v5 = .object(ofGroup: Object, withProperties: ["b", "constructor", "valueOf", "__proto__", "a"])
let v6 = v5;
const v8 = {valueOf:v6,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
const v12 = JSON.stringify(v8,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

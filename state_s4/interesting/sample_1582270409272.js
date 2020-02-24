function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {a:1337,constructor:v4,valueOf:Float32Array,__proto__:1337,b:3570651021};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "b", "a"])
let v6 = v5;
const v8 = {valueOf:v6,length:"search"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
const v12 = JSON.stringify(v8,JSON,2153514987);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v13 = JSON.parse(v12,Object);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();

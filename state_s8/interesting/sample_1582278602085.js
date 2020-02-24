function main() {
const v5 = [1337,-2147483648];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {e:13.37,c:v5,toString:13.37,__proto__:1337,d:-2147483648};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "toString", "e"])
const v7 = {e:"symbol",a:v6,constructor:1337,__proto__:RegExp,toString:v6,d:-2147483648};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "d", "e", "a"], withMethods: ["__proto__"])
const v9 = [1337,1337,1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v13 = JSON.stringify(v9,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v14 = JSON.parse(v13,Object);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

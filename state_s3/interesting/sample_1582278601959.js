function main() {
const v5 = [1337,-2147483648];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {e:13.37,c:v5,toString:13.37,__proto__:1337,d:-2147483648};
// v6 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "c", "toString"])
const v7 = {e:"symbol",a:v6,constructor:1337,__proto__:RegExp,toString:v6,d:-2147483648};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "a", "constructor", "d", "e"], withMethods: ["__proto__"])
const v9 = [1337,1337,1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v13 = JSON.stringify(v9,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v14 = JSON.parse(v13,Object);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

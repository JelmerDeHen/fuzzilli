function main() {
const v5 = [1337,-2147483648];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {e:13.37,c:v5,toString:13.37,__proto__:1337,d:-2147483648};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "c", "d", "e"])
const v7 = {e:"symbol",a:v6,constructor:1337,__proto__:RegExp,toString:v6,d:-2147483648};
// v7 = .object(ofGroup: Object, withProperties: ["e", "constructor", "a", "toString", "__proto__", "d"], withMethods: ["__proto__"])
const v9 = [1337,1337,1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = JSON.stringify(v9,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v14 = JSON.parse(v13,Object);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

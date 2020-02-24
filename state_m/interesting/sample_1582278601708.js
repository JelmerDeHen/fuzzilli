function main() {
const v5 = [1337,-2147483648];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {e:13.37,c:v5,toString:13.37,__proto__:1337,d:-2147483648};
// v6 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "e", "c"])
const v7 = {e:"symbol",a:v6,constructor:1337,__proto__:RegExp,toString:v6,d:-2147483648};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "e", "d", "toString"], withMethods: ["__proto__"])
const v9 = [1337,1337,1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = JSON.stringify(v9,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v14 = JSON.parse(v13,Object);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

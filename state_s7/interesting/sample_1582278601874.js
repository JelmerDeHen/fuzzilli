function main() {
const v5 = [1337,-2147483648];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {e:13.37,c:v5,toString:13.37,__proto__:1337,d:-2147483648};
// v6 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "toString", "c", "e"])
const v7 = {e:"symbol",a:v6,constructor:1337,__proto__:RegExp,toString:v6,d:-2147483648};
// v7 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__", "e", "a", "toString"], withMethods: ["__proto__"])
const v9 = [1337,1337,1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = JSON.stringify(v9,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v14 = JSON.parse(v13,Object);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

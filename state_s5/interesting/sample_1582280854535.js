function main() {
const v8 = [1337,-2147483648];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {e:13.37,c:v8,toString:13.37,__proto__:1337,d:-2147483648};
// v9 = .object(ofGroup: Object, withProperties: ["c", "e", "toString", "d", "__proto__"])
const v19 = {e:"symbol",a:v9,constructor:1337,__proto__:RegExp,toString:v9,d:-2147483648};
// v19 = .object(ofGroup: Object, withProperties: ["toString", "e", "__proto__", "a", "constructor", "d"], withMethods: ["__proto__"])
const v21 = [1337,1337,1337,v19];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v25 = JSON.stringify(v21,JSON,2153514987);
// v25 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v26 = JSON.parse(v25,Object);
// v26 = .unknown
const v27 = eval(v25);
// v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();

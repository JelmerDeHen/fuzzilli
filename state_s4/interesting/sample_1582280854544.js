function main() {
const v8 = [1337,-2147483648];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {e:13.37,c:v8,toString:13.37,__proto__:1337,d:-2147483648};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "c", "d", "e"])
const v19 = {e:"symbol",a:v9,constructor:1337,__proto__:RegExp,toString:v9,d:-2147483648};
// v19 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "a", "__proto__", "e", "d"], withMethods: ["__proto__"])
const v21 = [1337,1337,1337,v19];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v25 = JSON.stringify(v21,JSON,2153514987);
// v25 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v26 = JSON.parse(v25,Object);
// v26 = .unknown
const v27 = eval(v25);
// v27 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();

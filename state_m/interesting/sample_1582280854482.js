function main() {
const v8 = [1337,-2147483648];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = {e:13.37,c:v8,toString:13.37,__proto__:1337,d:-2147483648};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "e", "c"])
const v19 = {e:"symbol",a:v9,constructor:1337,__proto__:RegExp,toString:v9,d:-2147483648};
// v19 = .object(ofGroup: Object, withProperties: ["toString", "e", "constructor", "a", "d", "__proto__"], withMethods: ["__proto__"])
const v21 = [1337,1337,1337,v19];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v25 = JSON.stringify(v21,JSON,2153514987);
// v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v26 = JSON.parse(v25,Object);
// v26 = .unknown
const v27 = eval(v25);
// v27 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

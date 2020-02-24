function main() {
const v8 = [1337,-2147483648];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {e:13.37,c:v8,toString:13.37,__proto__:1337,d:-2147483648};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "toString", "c"])
const v19 = {e:"symbol",a:v9,constructor:1337,__proto__:RegExp,toString:v9,d:-2147483648};
// v19 = .object(ofGroup: Object, withProperties: ["e", "a", "toString", "constructor", "__proto__", "d"], withMethods: ["__proto__"])
const v21 = [1337,1337,1337,v19];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v25 = JSON.stringify(v21,JSON,2153514987);
// v25 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v26 = JSON.parse(v25,Object);
// v26 = .unknown
const v27 = eval(v25);
// v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

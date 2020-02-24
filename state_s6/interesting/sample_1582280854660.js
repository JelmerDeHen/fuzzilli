function main() {
const v8 = [1337,-2147483648];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = {e:13.37,c:v8,toString:13.37,__proto__:1337,d:-2147483648};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "toString", "e", "d"])
const v19 = {e:"symbol",a:v9,constructor:1337,__proto__:RegExp,toString:v9,d:-2147483648};
// v19 = .object(ofGroup: Object, withProperties: ["a", "d", "__proto__", "e", "constructor", "toString"], withMethods: ["__proto__"])
const v21 = [1337,1337,1337,v19];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v25 = JSON.stringify(v21,JSON,2153514987);
// v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v26 = JSON.parse(v25,Object);
// v26 = .unknown
const v27 = eval(v25);
// v27 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

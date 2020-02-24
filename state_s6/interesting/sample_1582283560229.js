function main() {
const v7 = [Array,-2147483648];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {e:13.37,c:v7,toString:13.37,__proto__:1337,d:-2147483648};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "c", "e"])
const v9 = {e:"symbol",a:v8,constructor:1337,__proto__:RegExp,toString:v8,d:-2147483648};
// v9 = .object(ofGroup: Object, withProperties: ["e", "constructor", "toString", "__proto__", "d", "a"], withMethods: ["__proto__"])
const v11 = [1337,1337,1337,v9];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = JSON.stringify(v11,JSON,2153514987);
// v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v15 = eval(v14);
// v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

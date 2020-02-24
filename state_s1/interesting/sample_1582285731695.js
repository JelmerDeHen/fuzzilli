function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {toString:1073741824,e:DataView,b:v4,valueOf:DataView,a:v3,constructor:DataView};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "constructor", "b", "a", "e"])
const v9 = {isExtensible:2291304804,apply:v5,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
// v9 = .object(ofGroup: Object, withProperties: ["preventExtensions", "ownKeys", "deleteProperty", "getOwnPropertyDescriptor", "apply", "isExtensible", "__proto__"])
const v11 = new Proxy(v3,v9);
// v11 = .unknown
const v12 = JSON.stringify(1337,v11,v11);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {toString:1073741824,e:DataView,b:v4,valueOf:DataView,a:v3,constructor:DataView};
// v5 = .object(ofGroup: Object, withProperties: ["e", "constructor", "toString", "b", "__proto__", "valueOf", "a"])
const v9 = {isExtensible:2291304804,apply:v5,getOwnPropertyDescriptor:1337,preventExtensions:2291304804,ownKeys:JSON,deleteProperty:2291304804};
// v9 = .object(ofGroup: Object, withProperties: ["apply", "preventExtensions", "getOwnPropertyDescriptor", "__proto__", "ownKeys", "deleteProperty", "isExtensible"])
const v11 = new Proxy(v3,v9);
// v11 = .unknown
const v12 = JSON.stringify(1337,v11,v11);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

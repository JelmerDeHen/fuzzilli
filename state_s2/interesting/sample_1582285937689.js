function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [v4];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {toString:"1t/yEFbOw4",a:v2,b:13.37,e:v5};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "e", "toString", "a"])
const v7 = {constructor:v6,c:v2,valueOf:"1t/yEFbOw4",__proto__:"1t/yEFbOw4",b:"1t/yEFbOw4",e:1337};
// v7 = .object(ofGroup: Object, withProperties: ["b", "e", "constructor", "__proto__", "valueOf", "c"])
const v13 = [1337,-2147483648];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {e:13.37,c:v13,toString:13.37,__proto__:1337,d:-2147483648};
// v14 = .object(ofGroup: Object, withProperties: ["e", "d", "c", "__proto__", "toString"])
const v15 = {e:"symbol",a:v14,constructor:1337,__proto__:RegExp,toString:v14,d:-2147483648};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "constructor", "toString", "d"], withMethods: ["__proto__"])
const v17 = [1337,1337,v7,v15];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v21 = JSON.stringify(v17,JSON,2153514987);
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v22 = JSON.parse(v21,Object);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();

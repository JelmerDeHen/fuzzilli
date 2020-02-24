function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = "string";
let v8 = "string";
const v11 = {};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v14 = [13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = [13.37,v14];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = v8 + v11;
// v16 = .primitive
const v17 = {a:v2,constructor:v3,d:13.37,toString:gc,e:v1,valueOf:v15,...v6,...v16};
// v17 = .object(ofGroup: Object, withProperties: ["e", "length", "d", "constructor", "__proto__", "a", "valueOf"], withMethods: ["padEnd", "repeat", "lastIndexOf", "indexOf", "split", "replace", "concat", "substring", "startsWith", "charAt", "padStart", "charCodeAt", "toString", "trim", "includes", "slice", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();

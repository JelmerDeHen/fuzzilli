function main() {
const v8 = [1.7976931348623157e+308];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = [255,255,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = {a:255,toString:isFinite,c:v8,__proto__:v10,valueOf:"object",constructor:"gM8oAednYn"};
// v11 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "constructor", "a", "valueOf"], withMethods: ["toString"])
let v14 = RegExp;
let v15 = v14;
const v18 = new Proxy(v15,Object);
// v18 = .unknown
const v19 = {toString:v8,valueOf:v11,d:255,constructor:536870912};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "constructor", "valueOf"])
const v20 = RegExp.apply(v19,v18);
// v20 = .unknown
const v21 = "2IdSaX90v.".replace(v20,gc);
// v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v24 = 0;
const v25 = v18 + 1;
// v25 = .primitive
v24 = v25;
}
%NeverOptimizeFunction(main);
main();

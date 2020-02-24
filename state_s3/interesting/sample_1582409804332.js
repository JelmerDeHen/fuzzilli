function main() {
const v8 = [1.7976931348623157e+308];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = [255,255,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = {a:255,toString:isFinite,c:v8,__proto__:v10,valueOf:"object",constructor:"gM8oAednYn"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "valueOf", "c"], withMethods: ["toString"])
let v14 = RegExp;
let v15 = v14;
const v18 = new Proxy(v15,Object);
// v18 = .unknown
const v19 = {toString:v8,valueOf:v11,d:255,constructor:536870912};
// v19 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "constructor", "d"])
const v20 = RegExp.apply(v19,v18);
// v20 = .unknown
const v21 = "2IdSaX90v.".replace(v20,gc);
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
let v24 = 0;
const v25 = v18 + 1;
// v25 = .primitive
v24 = v25;
}
%NeverOptimizeFunction(main);
main();

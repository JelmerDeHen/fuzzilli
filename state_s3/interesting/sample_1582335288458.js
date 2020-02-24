function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = [1.7976931348623157e+308];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = !"object";
// v10 = .boolean
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v16 = [255,255,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = {a:255,toString:isFinite,c:v9,__proto__:v16,valueOf:"object",constructor:"gM8oAednYn"};
// v17 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "valueOf", "__proto__"], withMethods: ["toString"])
let v20 = RegExp;
let v21 = v20;
const v26 = [13.37,13.37,-4294967297,-4294967297];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v27 = new Proxy(v21,Object);
// v27 = .unknown
const v28 = {toString:v9,valueOf:v17,d:255,constructor:536870912};
// v28 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "__proto__", "d", "toString"])
const v29 = RegExp.apply(v28,v27);
// v29 = .unknown
let v32 = 0;
Object.__proto__ = v29;
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
const v40 = "2IdSaX90v.".replace(v29,v26);
// v40 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();

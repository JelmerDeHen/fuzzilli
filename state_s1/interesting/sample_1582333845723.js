function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = -598541760 == "2T6f+*H8Ap";
// v7 = .boolean
const v17 = [1.7976931348623157e+308];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = [255,255,255];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v20 = {a:255,toString:isFinite,c:v17,__proto__:v19,valueOf:"object",constructor:"gM8oAednYn"};
// v20 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "a", "c", "__proto__"], withMethods: ["toString"])
let v23 = RegExp;
let v24 = v23;
const v27 = new Proxy(v24,Object);
// v27 = .unknown
const v28 = Object.freeze(v27);
// v28 = .undefined
const v29 = {toString:v17,valueOf:v20,d:255,constructor:536870912};
// v29 = .object(ofGroup: Object, withProperties: ["constructor", "d", "toString", "valueOf", "__proto__"])
const v30 = RegExp.apply(v29,RegExp);
// v30 = .unknown
const v31 = "2IdSaX90v.".replace(v30,1);
// v31 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();

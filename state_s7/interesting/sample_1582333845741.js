function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = -598541760 == "2T6f+*H8Ap";
// v7 = .boolean
const v17 = [1.7976931348623157e+308];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v19 = [255,255,255];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v20 = {a:255,toString:isFinite,c:v17,__proto__:v19,valueOf:"object",constructor:"gM8oAednYn"};
// v20 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "constructor", "a"], withMethods: ["toString"])
let v23 = RegExp;
let v24 = v23;
const v27 = new Proxy(v24,Object);
// v27 = .unknown
const v28 = Object.freeze(v27);
// v28 = .undefined
const v29 = {toString:v17,valueOf:v20,d:255,constructor:536870912};
// v29 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "valueOf", "toString"])
const v30 = RegExp.apply(v29,RegExp);
// v30 = .unknown
const v31 = "2IdSaX90v.".replace(v30,1);
// v31 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

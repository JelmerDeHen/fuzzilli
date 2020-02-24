function main() {
function v1(v2,v3) {
    return 536870912;
}
const v10 = [1.7976931348623157e+308];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = [255,255,255];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = {a:255,toString:isFinite,c:v10,__proto__:v12,valueOf:"object",constructor:"gM8oAednYn"};
// v13 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "valueOf", "a"], withMethods: ["toString"])
let v16 = RegExp;
let v17 = v16;
let v20 = 0;
const v23 = new Proxy(v17,Object);
// v23 = .unknown
const v24 = Object.freeze(v23);
// v24 = .undefined
const v25 = {toString:v10,valueOf:v13,d:255,constructor:536870912};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "valueOf", "d"])
const v26 = RegExp.apply(v25,RegExp);
// v26 = .unknown
const v27 = "2IdSaX90v.".replace(v26,v1);
// v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();

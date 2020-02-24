function main() {
function v1(v2,v3) {
    return 536870912;
}
const v10 = [1.7976931348623157e+308];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = [255,255,255];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = {a:255,toString:isFinite,c:v10,__proto__:v12,valueOf:"object",constructor:"gM8oAednYn"};
// v13 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "c", "constructor"], withMethods: ["toString"])
let v16 = RegExp;
let v17 = v16;
let v20 = 0;
const v23 = new Proxy(v17,Object);
// v23 = .unknown
const v24 = Object.freeze(v23);
// v24 = .undefined
const v25 = {toString:v10,valueOf:v13,d:255,constructor:536870912};
// v25 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "constructor", "toString"])
const v26 = RegExp.apply(v25,RegExp);
// v26 = .unknown
const v27 = "2IdSaX90v.".replace(v26,v1);
// v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

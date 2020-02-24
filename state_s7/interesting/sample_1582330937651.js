function main() {
function v1(v2,v3) {
    return v2;
}
const v9 = [1.7976931348623157e+308];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v11 = [255,255,255];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = {a:255,toString:Math,c:v9,__proto__:v11,valueOf:"object",constructor:"gM8oAednYn"};
// v12 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "toString", "constructor", "__proto__"])
let v15 = RegExp;
let v16 = v15;
const v19 = new Proxy(v16,Object);
// v19 = .unknown
const v20 = Object.freeze(v19);
// v20 = .undefined
const v21 = {toString:v9,valueOf:v12,d:255,constructor:536870912};
// v21 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "valueOf", "d"])
const v22 = RegExp.apply(v21,RegExp);
// v22 = .unknown
const v23 = "2IdSaX90v.".replace(v22,v1);
// v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = {__proto__:536870912};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = [1.7976931348623157e+308];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = [255,255,255];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = {a:255,toString:isFinite,c:v8,__proto__:v10,valueOf:"object",constructor:"gM8oAednYn"};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor", "a", "valueOf"], withMethods: ["toString"])
let v15 = RegExp;
let v16 = v15;
const v19 = new Proxy(v16,Object);
// v19 = .unknown
const v20 = Object.freeze(v19);
// v20 = .undefined
const v21 = {toString:v8,valueOf:v11,d:255,constructor:536870912};
// v21 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "__proto__", "valueOf", "d"])
const v22 = RegExp.apply(v21,RegExp);
// v22 = .unknown
const v23 = "2IdSaX90v.".replace(v22,"1t/yEFbOw4");
// v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

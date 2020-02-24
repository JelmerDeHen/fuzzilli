function main() {
const v7 = [1.7976931348623157e+308];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = [255,255,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {a:255,toString:isFinite,c:v7,__proto__:v9,valueOf:"object",constructor:"gM8oAednYn"};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c", "constructor", "a"], withMethods: ["toString"])
let v13 = RegExp;
let v14 = v13;
let v19 = 13.37;
const v22 = [13.37,13.37,-4294967297,-4294967297];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v24 = [v22,-9007199254740992,v22];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v26 = 0;
const v27 = v24.push(v19);
// v27 = .integer
const v28 = v27 + 1;
// v28 = .primitive
v26 = v28;
const v29 = new Proxy(v14,Object);
// v29 = .unknown
const v30 = Object.freeze(v29);
// v30 = .undefined
const v31 = {toString:v7,valueOf:v10,d:255,constructor:536870912};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "valueOf", "d"])
const v32 = RegExp.apply(v31,v29);
// v32 = .unknown
const v33 = "2IdSaX90v.".replace(v32,v22);
// v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

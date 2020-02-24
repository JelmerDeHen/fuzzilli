function main() {
const v5 = [1.7976931348623157e+308];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [255,255,255];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:255,toString:Math,c:v5,__proto__:v7,valueOf:"object",constructor:"gM8oAednYn"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "constructor", "toString", "valueOf"])
let v10 = RegExp;
let v11 = v10;
const v14 = new Proxy(v11,Object);
// v14 = .unknown
const v15 = Object.freeze(v14);
// v15 = .undefined
const v16 = {toString:v5,valueOf:v8,d:255,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "d", "constructor", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
